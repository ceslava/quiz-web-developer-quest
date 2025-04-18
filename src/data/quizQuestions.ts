
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
  "series": "cinema",
  "cultura": "history",
  "ux": "ux",
  "figma": "design",
  "photoshop": "design",
  "3d": "design",
  "paises": "geography",
  "continentes": "geography"
};

