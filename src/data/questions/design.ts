
import { Question } from '../types';

export const designQuestions: Question[] = [
  {
    id: 1,
    text: "¿Qué principio de diseño se muestra en esta imagen?",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    options: [
      { text: "Balance", isCorrect: true },
      { text: "Contraste", isCorrect: false },
      { text: "Ritmo", isCorrect: false },
      { text: "Proximidad", isCorrect: false }
    ]
  },
  {
    id: 2,
    text: "¿Cuál es la paleta de colores más adecuada para transmitir calma?",
    options: [
      { text: "Rojos y naranjas", isCorrect: false },
      { text: "Azules y verdes", isCorrect: true },
      { text: "Negros y grises", isCorrect: false },
      { text: "Amarillos y rojos", isCorrect: false }
    ]
  }
];
