
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Brain, 
  Code, 
  Palette, 
  Globe, 
  FilmIcon, 
  Users, 
  Box, 
  Check,
  BookOpen,
  Dumbbell,
  Music,
  History,
  ChefHat,
  Microscope,
  Gamepad2,
  Car
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from './Header';
import { categories, getAllTopics } from '../config/topicsConfig';
import { getRandomQuestions } from '../data/topics';
import { TopicItem } from '../config/topicsConfig';
import Footer from './Footer';

interface QuizStartProps {
  onStart: (data: { topic: string, questions?: any }) => void;
  userName?: string;
}

const QuizStart = ({ onStart, userName }: QuizStartProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [availableTopics, setAvailableTopics] = useState<TopicItem[]>([]);

  useEffect(() => {
    const highScores = JSON.parse(localStorage.getItem('highScores') || '{}');
    setCompletedTopics(Object.keys(highScores));
    
    // Cargar solo los temas que tienen preguntas
    const loadTopicsWithQuestions = async () => {
      const allTopics = getAllTopics();
      const topicsWithQuestions = [];
      
      for (const topic of allTopics) {
        try {
          const questions = await getRandomQuestions(topic.id, 1);
          if (questions && questions.length > 0) {
            topicsWithQuestions.push(topic);
          }
        } catch (error) {
          console.error(`Error checking questions for ${topic.id}:`, error);
        }
      }
      
      setAvailableTopics(topicsWithQuestions);
    };
    
    loadTopicsWithQuestions();
  }, []);

  const handleRandomTopic = () => {
    const filteredTopics = availableTopics.filter(topic => 
      !completedTopics.includes(topic.id) &&
      (searchQuery === "" || 
        topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.category?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    if (filteredTopics.length === 0) {
      // Si no hay temas sin completar, elegir cualquier tema filtrado
      const searchFilteredTopics = availableTopics.filter(topic =>
        searchQuery === "" || 
        topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      if (searchFilteredTopics.length > 0) {
        const randomTopic = searchFilteredTopics[Math.floor(Math.random() * searchFilteredTopics.length)];
        onStart({ topic: randomTopic.id });
      } else {
        alert("No hay temas disponibles con tu búsqueda");
      }
    } else {
      const randomTopic = filteredTopics[Math.floor(Math.random() * filteredTopics.length)];
      onStart({ topic: randomTopic.id });
    }
  };

  const handleTopicSelect = async (topicId: string) => {
    const questions = await getRandomQuestions(topicId);
    if (questions && questions.length > 0) {
      onStart({ topic: topicId, questions });
    } else {
      alert("Este tema aún no tiene preguntas disponibles.");
    }
  };

  const filteredAvailableTopics = availableTopics.filter(topic =>
    (searchQuery ? 
      topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category?.toLowerCase().includes(searchQuery.toLowerCase())
      : true) &&
    (!selectedCategory || topic.category === selectedCategory)
  );

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'tecnologia': return Brain;
      case 'desarrollo': return Code;
      case 'diseño': return Palette;
      case 'cultura': return Users;
      case 'entretenimiento': return FilmIcon;
      case 'geografía': 
      case 'geografia': return Globe;
      case 'ciencia': return Microscope;
      case 'deportes': return Dumbbell;
      case 'gastronomia': return ChefHat;
      default: return Box;
    }
  };

  // Agrupamos los temas por categoría
  const topicsByCategory = filteredAvailableTopics.reduce((acc, topic) => {
    const category = topic.category || 'otros';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(topic);
    return acc;
  }, {} as Record<string, TopicItem[]>);

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  const getTopicIcon = (topic: TopicItem) => {
    const mappedIcons: Record<string, React.ElementType> = {
      'desarrollo-web': Code,
      'ia': Brain,
      'blockchain': Globe,
      'ciberseguridad': Shield,
      'ux': Palette,
      'figma': Palette,
      'tipografia': BookOpen,
      '3d': Box,
      'espacio': Star,
      'biologia': Leaf,
      'quimica': Flask,
      'fisica': Atom,
      'cine': FilmIcon,
      'series': Tv,
      'videojuegos': Gamepad2,
      'anime': Heart,
      'historia': Clock,
      'arte': PaintBucket,
      'musica': Music,
      'literatura': BookOpen,
      'futbol': Ball,
      'baloncesto': Basketball,
      'tenis': Tennis,
      'f1': Car,
      'cocina': ChefHat,
      'reposteria': Cake,
      'vinos': Wine,
      'comidas-mundo': Globe,
      'paises': Globe,
      'capitales': Building,
      'banderas': Flag,
      'maravillas': Landmark
    };

    return mappedIcons[topic.id] || topic.icon || getCategoryIcon(topic.category || '');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient">
      <Header userName={userName} topicName={''} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-6xl mx-auto space-y-6 p-4 flex-grow pt-24 pb-16"
      >
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold text-white">
            Elige un tema para comenzar
          </h1>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Buscar temas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            onClick={handleRandomTopic}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Tema al Azar
          </Button>
        </div>

        <div className="space-y-8">
          {Object.entries(topicsByCategory).map(([categoryId, topics]) => (
            <div key={categoryId} className="mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">{getCategoryName(categoryId)}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {topics.map((topic) => {
                  const TopicIcon = getTopicIcon(topic);
                  const isCompleted = completedTopics.includes(topic.id);
                  
                  return (
                    <button 
                      key={topic.id}
                      onClick={() => handleTopicSelect(topic.id)}
                      className={`flex items-center gap-3 p-4 rounded-lg transition-all transform hover:scale-105 ${
                        isCompleted 
                          ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                          : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                      }`}
                    >
                      <div className="p-2 rounded-full bg-purple-500/20">
                        {React.createElement(TopicIcon, { className: "w-5 h-5" })}
                      </div>
                      <span className="flex-1 text-left">{topic.name}</span>
                      {isCompleted && (
                        <Check className="w-5 h-5 text-green-500" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
          
          {Object.keys(topicsByCategory).length === 0 && (
            <div className="text-center py-10">
              <p className="text-white text-lg">No se encontraron temas con tu búsqueda</p>
            </div>
          )}
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default QuizStart;
