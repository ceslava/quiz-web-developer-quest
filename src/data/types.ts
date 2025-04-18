
export interface Question {
  id: number;
  text: string;
  image?: string;
  options: {
    text: string;
    image?: string;
    isCorrect: boolean;
  }[];
}

export interface QuizData {
  [key: string]: Question[];
}

export interface QuizTopics {
  id: string;
  name: string;
  icon: string;
  category?: string;
}

export interface UserSession {
  name: string;
  highScores: {
    [key: string]: number;
  };
}
