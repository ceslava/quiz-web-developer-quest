
import { Question } from '../types';

export const artQuestions: Question[] = [
  {
    id: 1,
    text: "¿Qué estilo arquitectónico se muestra en esta imagen?",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    options: [
      { text: "Gótico", isCorrect: false },
      { text: "Islámico", isCorrect: true },
      { text: "Románico", isCorrect: false },
      { text: "Barroco", isCorrect: false }
    ]
  }
];
