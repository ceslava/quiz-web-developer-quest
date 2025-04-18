export interface QuestionOption {
  text: string;
  image?: string;
}

export interface Question {
  id: string;
  text: string;
  image?: string;
  options: QuestionOption[];
  correctAnswer: number;
  explanation: string;
}

export interface Topic {
  id: string;
  name: string;
  category: string;
  questions: Question[];
}

export interface UserSession {
  name: string;
  highScores: {
    [key: string]: number;
  };
}
