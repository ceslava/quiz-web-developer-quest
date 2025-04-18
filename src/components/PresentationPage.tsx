
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Brain, Sparkles } from "lucide-react";

interface PresentationPageProps {
  onNameSubmit: (name: string) => void;
  initialName?: string;
}

const PresentationPage = ({ onNameSubmit, initialName = '' }: PresentationPageProps) => {
  const [name, setName] = useState(initialName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full space-y-8 text-center"
      >
        <div className="space-y-4">
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Brain className="w-16 h-16 text-purple-500" />
            </motion.div>
          </div>
          
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            BrainQuest
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Pon a prueba tus conocimientos en una aventura interactiva
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="relative">
            <Sparkles className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="¿Cómo te llamas?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="pl-10 py-3 text-lg"
              autoFocus
            />
          </div>
          <Button 
            type="submit" 
            className="w-full py-6 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            disabled={!name.trim()}
          >
            Comenzar Aventura
          </Button>
        </form>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          Descubre cientos de temas diferentes y pon a prueba tus conocimientos.
        </p>
      </motion.div>
    </div>
  );
};

export default PresentationPage;
