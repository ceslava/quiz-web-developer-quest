
import { Question } from '../types';

export const geographyQuestions: Question[] = [
  {
    id: 1,
    text: "¿Qué montaña se muestra en la imagen?",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    options: [
      { text: "Monte Everest", isCorrect: false },
      { text: "Monte Kilimanjaro", isCorrect: false },
      { text: "Monte Fuji", isCorrect: true },
      { text: "Mont Blanc", isCorrect: false }
    ]
  }
];
