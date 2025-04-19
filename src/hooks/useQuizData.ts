
import { useState, useEffect } from 'react';
import { TopicItem } from '../config/topicsConfig';
import { getAllTopics } from '../config/topicsConfig';
import { getRandomQuestions } from '../data/topics';

export const useQuizData = () => {
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

  return {
    completedTopics,
    availableTopics
  };
};
