
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
