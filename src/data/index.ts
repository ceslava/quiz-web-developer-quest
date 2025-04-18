import { Code, Palette, Brain, Users, FilmIcon, Globe } from 'lucide-react';

// Importar JSONs
import htmlQuestions from './desarrollo/html.json';
import cssQuestions from './desarrollo/css.json';
// ... más importaciones

export const topicConfig = {
  html: { icon: Code },
  css: { icon: Code },
  javascript: { icon: Code },
  photoshop: { icon: Palette },
  // ... más configuraciones
};

export const getAllTopics = () => {
  const topics = [
    { ...htmlQuestions, icon: topicConfig[htmlQuestions.id].icon },
    { ...cssQuestions, icon: topicConfig[cssQuestions.id].icon },
    // ... más topics
  ];
  
  return topics;
};

export const getRandomQuestions = (topicId: string, count: number = 10) => {
  const topic = getAllTopics().find(t => t.id === topicId);
  if (!topic) return [];
  
  const questions = [...topic.questions];
  const selectedQuestions = [];
  
  while (selectedQuestions.length < count && questions.length > 0) {
    const randomIndex = Math.floor(Math.random() * questions.length);
    selectedQuestions.push(questions.splice(randomIndex, 1)[0]);
  }
  
  return selectedQuestions;
};