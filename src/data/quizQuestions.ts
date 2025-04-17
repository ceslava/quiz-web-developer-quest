interface Question {
  id: number;
  text: string;
  image?: string;
  options: {
    text: string;
    image?: string;
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
  ],
  design: [
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
  ],
  typography: [
    {
      id: 1,
      text: "¿Qué tipo de fuente es más adecuada para textos largos?",
      options: [
        { text: "Serif", isCorrect: true },
        { text: "Sans-serif", isCorrect: false },
        { text: "Display", isCorrect: false },
        { text: "Decorativa", isCorrect: false }
      ]
    }
  ],
  ai: [
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
  ],
  geography: [
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
  ],
  art: [
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
  ],
  cinema: [
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
  ]
};
