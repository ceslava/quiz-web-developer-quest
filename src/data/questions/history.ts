import { Question } from '../types';

export const historyQuestions: Question[] = [
  {
    id: 1,
    text: "¿En qué año comenzó la Segunda Guerra Mundial?",
    options: [
      { text: "1939", isCorrect: true },
      { text: "1941", isCorrect: false },
      { text: "1945", isCorrect: false },
      { text: "1938", isCorrect: false }
    ]
  },
  {
    id: 2,
    text: "¿Quién fue el primer emperador romano?",
    options: [
      { text: "Julio César", isCorrect: false },
      { text: "Augusto", isCorrect: true },
      { text: "Nerón", isCorrect: false },
      { text: "Calígula", isCorrect: false }
    ]
  },
  {
    id: 3,
    text: "¿En qué año se descubrió América?",
    options: [
      { text: "1490", isCorrect: false },
      { text: "1492", isCorrect: true },
      { text: "1495", isCorrect: false },
      { text: "1489", isCorrect: false }
    ]
  },
  {
    id: 4,
    text: "¿Qué civilización construyó las pirámides de Giza?",
    options: [
      { text: "Los mayas", isCorrect: false },
      { text: "Los romanos", isCorrect: false },
      { text: "Los egipcios", isCorrect: true },
      { text: "Los persas", isCorrect: false }
    ]
  },
  {
    id: 5,
    text: "¿En qué año cayó el Muro de Berlín?",
    options: [
      { text: "1989", isCorrect: true },
      { text: "1991", isCorrect: false },
      { text: "1985", isCorrect: false },
      { text: "1987", isCorrect: false }
    ]
  },
  {
    id: 6,
    text: "¿Quién pintó la Mona Lisa?",
    options: [
      { text: "Miguel Ángel", isCorrect: false },
      { text: "Leonardo da Vinci", isCorrect: true },
      { text: "Rafael", isCorrect: false },
      { text: "Donatello", isCorrect: false }
    ]
  },
  {
    id: 7,
    text: "¿En qué año terminó la Primera Guerra Mundial?",
    options: [
      { text: "1918", isCorrect: true },
      { text: "1919", isCorrect: false },
      { text: "1916", isCorrect: false },
      { text: "1920", isCorrect: false }
    ]
  },
  {
    id: 8,
    text: "¿Cuál fue la primera civilización de la historia?",
    options: [
      { text: "Egipcia", isCorrect: false },
      { text: "Sumeria", isCorrect: true },
      { text: "China", isCorrect: false },
      { text: "Griega", isCorrect: false }
    ]
  },
  {
    id: 9,
    text: "¿En qué año llegó el hombre a la Luna?",
    options: [
      { text: "1967", isCorrect: false },
      { text: "1968", isCorrect: false },
      { text: "1969", isCorrect: true },
      { text: "1970", isCorrect: false }
    ]
  },
  {
    id: 10,
    text: "¿Quién fue el primer presidente de Estados Unidos?",
    options: [
      { text: "Thomas Jefferson", isCorrect: false },
      { text: "John Adams", isCorrect: false },
      { text: "Benjamin Franklin", isCorrect: false },
      { text: "George Washington", isCorrect: true }
    ]
  }
];
