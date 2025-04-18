import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Brain, Code, Palette, Globe, BookType, FilmIcon, Users, Layout, Box } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from './Header';

const topics = [
  { id: "desarrollo-web", name: "Desarrollo Web", icon: Code, category: "Desarrollo" },
  { id: "historia", name: "Historia", icon: BookOpen, category: "Cultura" },
  { id: "diseño", name: "Diseño", icon: Palette, category: "Diseño" },
  { id: "tipografía", name: "Tipografía", icon: BookType, category: "Diseño" },
  { id: "ia", name: "IA", icon: Brain, category: "Tecnología" },
  { id: "geografía", name: "Geografía", icon: Globe, category: "Cultura" },
  { id: "arte", name: "Arte", icon: Palette, category: "Arte" },
  { id: "cine", name: "Cine", icon: FilmIcon, category: "Entretenimiento" },
  { id: "series", name: "Series", icon: Tv, category: "Entretenimiento" },
  { id: "cultura", name: "Cultura", icon: Users, category: "Cultura" },
  { id: "ux", name: "UX Design", icon: Layout, category: "Diseño" },
  { id: "figma", name: "Figma", icon: Figma, category: "Diseño" },
  { id: "photoshop", name: "Photoshop", icon: Image, category: "Diseño" },
  { id: "3d", name: "3D", icon: Box, category: "Diseño" },
  { id: "paises", name: "Países", icon: Map, category: "Geografía" },
  { id: "continentes", name: "Continentes", icon: Globe, category: "Geografía" }
];

interface QuizStartProps {
  onStart: (data: { topic: string }) => void;
  userName?: string;
}

const QuizStart = ({ onStart, userName }: QuizStartProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(topics.map(topic => topic.category)));
  
  const handleRandomTopic = () => {
    const availableTopics = topics.filter(topic =>
      topic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const randomTopic = availableTopics[Math.floor(Math.random() * availableTopics.length)];
    onStart({ topic: randomTopic.id });
  };

  const filteredTopics = topics.filter(topic =>
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
    <div className="min-h-screen flex items-center justify-center p-4 pt-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl space-y-6"
      >
        <Header userName={userName} showBackToTopics={false} />

        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Elige un tema para comenzar
          </h1>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="relative">
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

        <div className="grid gap-6">
          {categories.map((category) => {
            const CategoryIcon = getCategoryIcon(category);
            const categoryTopics = filteredTopics.filter(t => t.category === category);
            if (categoryTopics.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <button
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className="w-full text-left"
                >
                  <div className="flex items-center gap-3 text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">
                    <CategoryIcon className="w-5 h-5" />
                    <span>{category}</span>
                  </div>
                </button>

                <AnimatePresence>
                  {(selectedCategory === category || searchQuery) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 overflow-hidden"
                    >
                      {categoryTopics.map((topic) => (
                        <motion.button
                          key={topic.id}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => onStart({ topic: topic.id })}
                          className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center gap-3 group"
                        >
                          <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors">
                            <CategoryIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-sm font-medium text-center text-gray-700 dark:text-gray-200">
                            {topic.name}
                          </span>
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Desarrollado por Cristian Eslava
        </p>
      </motion.div>
    </div>
  );
};

export default QuizStart;
