
import { Question } from '../types';

export const webQuestions: Question[] = [
  {
    id: 1,
    text: "¿Cuál de las siguientes tecnologías se utiliza principalmente para estilizar páginas web?",
    options: [
      { text: "HTML", isCorrect: false },
      { text: "CSS", isCorrect: true },
      { text: "JavaScript", isCorrect: false },
      { text: "Python", isCorrect: false }
    ]
  },
  {
    id: 2,
    text: "¿Qué significa HTML?",
    options: [
      { text: "HyperText Markup Language", isCorrect: true },
      { text: "High Technical Modern Language", isCorrect: false },
      { text: "Hyperlink and Text Markup Language", isCorrect: false },
      { text: "High Text Machine Language", isCorrect: false }
    ]
  },
  {
    id: 3,
    text: "¿Cuál es el propósito principal de JavaScript?",
    options: [
      { text: "Dar estilo a las páginas web", isCorrect: false },
      { text: "Estructurar el contenido web", isCorrect: false },
      { text: "Añadir interactividad a las páginas web", isCorrect: true },
      { text: "Gestionar bases de datos", isCorrect: false }
    ]
  },
  {
    id: 4,
    text: "¿Qué significa API?",
    options: [
      { text: "Application Programming Interface", isCorrect: true },
      { text: "Advanced Programming Implementation", isCorrect: false },
      { text: "Automated Programming Integration", isCorrect: false },
      { text: "Application Process Integration", isCorrect: false }
    ]
  },
  {
    id: 5,
    text: "¿Qué es React?",
    options: [
      { text: "Un lenguaje de programación", isCorrect: false },
      { text: "Una biblioteca de JavaScript", isCorrect: true },
      { text: "Un servidor web", isCorrect: false },
      { text: "Un sistema operativo", isCorrect: false }
    ]
  },
  {
    id: 6,
    text: "¿Qué es un selector CSS?",
    options: [
      { text: "Un elemento HTML", isCorrect: false },
      { text: "Un patrón para seleccionar elementos a estilizar", isCorrect: true },
      { text: "Una función JavaScript", isCorrect: false },
      { text: "Un tipo de base de datos", isCorrect: false }
    ]
  },
  {
    id: 7,
    text: "¿Qué significa SQL?",
    options: [
      { text: "Structured Query Language", isCorrect: true },
      { text: "Simple Question Language", isCorrect: false },
      { text: "System Quality Language", isCorrect: false },
      { text: "Standard Query Logic", isCorrect: false }
    ]
  },
  {
    id: 8,
    text: "¿Qué es Git?",
    options: [
      { text: "Un lenguaje de programación", isCorrect: false },
      { text: "Un sistema de control de versiones", isCorrect: true },
      { text: "Un framework web", isCorrect: false },
      { text: "Un servidor web", isCorrect: false }
    ]
  },
  {
    id: 9,
    text: "¿Qué es un navegador web?",
    options: [
      { text: "Un programa para crear sitios web", isCorrect: false },
      { text: "Un programa para acceder a sitios web", isCorrect: true },
      { text: "Un servidor web", isCorrect: false },
      { text: "Una base de datos", isCorrect: false }
    ]
  },
  {
    id: 10,
    text: "¿Qué es responsive design?",
    options: [
      { text: "Un tipo de base de datos", isCorrect: false },
      { text: "Un lenguaje de programación", isCorrect: false },
      { text: "Diseño adaptable a diferentes dispositivos", isCorrect: true },
      { text: "Un framework de JavaScript", isCorrect: false }
    ]
  }
];
