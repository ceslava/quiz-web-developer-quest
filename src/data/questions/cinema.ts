
import { Question } from '../types';

export const cinemaQuestions: Question[] = [
  {
    id: 1,
    text: "¿De qué película es esta escena icónica?",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    options: [
      { text: "Blade Runner", isCorrect: false },
      { text: "Matrix", isCorrect: true },
      { text: "Inception", isCorrect: false },
      { text: "Tron", isCorrect: false }
    ]
  }
];
