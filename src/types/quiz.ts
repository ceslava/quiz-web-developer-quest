export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Topic {
  id: string;
  name: string;
  icon: any;
  category: string;
  questions: Question[];
}