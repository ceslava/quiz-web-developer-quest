import { Question, Topic } from './types';
import { getAllTopics } from '../config/topicsConfig';

export const getQuestions = async (topicId: string): Promise<Question[]> => {
  try {
    const allTopics = getAllTopics();
    const topic = allTopics.find(t => t.id === topicId);
    
    if (!topic) {
      throw new Error(`Topic ${topicId} not found`);
    }

    // Importar dinámicamente el archivo JSON de preguntas
    const questions = await import(`./topics/${topic.category}/${topicId}.json`)
      .then(module => module.default.questions)
      .catch(() => []);

    return questions;
  } catch (error) {
    console.error(`Error loading questions for topic ${topicId}:`, error);
    return [];
  }
};

export const getRandomQuestions = (questions: Question[], count: number = 10): Question[] => {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, questions.length));
};