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
  Check 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from './Header';
import { categories, getAllTopics } from '../config/topicsConfig';
import { getRandomQuestions } from '../data/topics';
import { TopicItem } from '../config/topicsConfig';

interface QuizStartProps {
  onStart: (data: { topic: string, questions?: any }) => void;
  userName?: string;
}

const QuizStart = ({ onStart, userName }: QuizStartProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);

  useEffect(() => {
    const highScores = JSON.parse(localStorage.getItem('highScores') || '{}');
    setCompletedTopics(Object.keys(highScores));
  }, []);

  const handleRandomTopic = () => {
    const allTopics = getAllTopics();
    const availableTopics = allTopics.filter(topic => 
      !completedTopics.includes(topic.id) &&
      (topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category?.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    if (availableTopics.length === 0) {
      const filteredTopics = allTopics.filter(topic =>
        topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        topic.category?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const randomTopic = filteredTopics[Math.floor(Math.random() * filteredTopics.length)];
      onStart({ topic: randomTopic.id });
    } else {
      const randomTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
      onStart({ topic: randomTopic.id });
    }
  };

  const handleTopicSelect = async (topicId: string) => {
    const questions = await getRandomQuestions(topicId);
    onStart({ topic: topicId, questions });
  };

  const filteredTopics = getAllTopics().filter(topic =>
    (searchQuery ? 
      topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category?.toLowerCase().includes(searchQuery.toLowerCase())
      : true) &&
    (!selectedCategory || topic.category === selectedCategory)
  );

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'desarrollo': return Code;
      case 'diseño': return Palette;
      case 'tecnología': return Brain;
      case 'cultura': return Users;
      case 'entretenimiento': return FilmIcon;
      case 'geografía': return Globe;
      default: return Box;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient pt-20">
      <Header userName={userName} topicName={''} />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl mx-auto space-y-6 p-4"
      >
        

        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
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

        <div>
          {categories.map(category => (
            <div key={category.id} className="mb-6">
              <h2 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-4">{category.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.topics.map((topic: TopicItem) => (
                  <button 
                    key={topic.id}
                    onClick={() => handleTopicSelect(topic.id)}
                    className={`flex items-center gap-2 p-2 rounded-md ${
                      completedTopics.includes(topic.id) 
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400' 
                        : 'bg-purple-100 dark:bg-purple-900/20 hover:bg-purple-200 dark:hover:bg-purple-900/30'
                    } transition-colors`}
                  >
                    {React.createElement(topic.icon || Box, { className: "w-4 h-4" })}
                    <span>{topic.name}</span>
                    {completedTopics.includes(topic.id) && (
                      <Check className="w-4 h-4 ml-auto text-green-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default QuizStart;
