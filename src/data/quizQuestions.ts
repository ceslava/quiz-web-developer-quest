
interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    isCorrect: boolean;
  }[];
}

interface QuizData {
  [key: string]: Question[];
}

export const quizQuestions: QuizData = {
  web: [
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
  ],
  history: [
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
  ]
};
