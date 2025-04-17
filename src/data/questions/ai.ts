
import { Question } from '../types';

export const aiQuestions: Question[] = [
  {
    id: 1,
    text: "¿Qué tipo de IA se muestra en esta imagen?",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    options: [
      { text: "Procesamiento de Lenguaje Natural", isCorrect: false },
      { text: "Visión por Computadora", isCorrect: true },
      { text: "Aprendizaje por Refuerzo", isCorrect: false },
      { text: "Redes Neuronales", isCorrect: false }
    ]
  }
];
