import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Header from './Header';
import Footer from './Footer';
import SearchBar from './quiz/SearchBar';
import TopicCategory from './quiz/TopicCategory';
import { categories, getAllTopics } from '../config/topicsConfig';
import { getRandomQuestions } from '../data/topics';
import type { TopicItem } from '../config/topicsConfig';

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

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : categoryId;
  };

  const topicsByCategory = filteredAvailableTopics.reduce((acc, topic) => {
    const category = topic.category || 'otros';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(topic);
    return acc;
  }, {} as Record<string, TopicItem[]>);

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

        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onRandomTopic={handleRandomTopic}
        />

        <div className="space-y-8">
          {Object.entries(topicsByCategory).map(([categoryId, topics]) => (
            <TopicCategory
              key={categoryId}
              categoryName={getCategoryName(categoryId)}
              topics={topics}
              completedTopics={completedTopics}
              onTopicSelect={handleTopicSelect}
            />
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
