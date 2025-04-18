import { categories, getAllTopics } from '../../config/topicsConfig';
import { Question } from '../types';

export const getRandomQuestions = async (topicId: string, count: number = 10): Promise<Question[]> => {
  try {
    const allTopics = getAllTopics();
    const topic = allTopics.find(t => t.id === topicId);
    
    if (!topic) {
      throw new Error(`Topic ${topicId} not found`);
    }

    const questions: Question[] = await import(`./${topic.category}/${topicId}.json`)
      .then(module => module.default.questions)
      .catch((): Question[] => []);

    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.min(count, questions.length));
  } catch (error) {
    console.error(`Error loading questions for topic ${topicId}:`, error);
    return [];
  }
};

export { categories, getAllTopics };