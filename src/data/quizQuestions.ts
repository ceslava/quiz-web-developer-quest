
import { QuizData } from './types';
import quizData from './quizData.json';

export const quizQuestions: QuizData = quizData;

// Topic mapping for the app
export const topicMapping: Record<string, string> = {
  "desarrollo-web": "web",
  "historia": "history",
  "diseño": "design",
  "tipografía": "typography",
  "ia": "ai",
  "geografía": "geography",
  "arte": "art",
  "cine": "cinema",
  "series": "cinema", // Using cinema for now since series doesn't have its own
  "cultura": "history" // Using history for now since cultura doesn't have its own
};
