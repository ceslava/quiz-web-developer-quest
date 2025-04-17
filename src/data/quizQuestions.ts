
import { QuizData } from './types';
import { webQuestions } from './questions/web';
import { historyQuestions } from './questions/history';
import { designQuestions } from './questions/design';
import { typographyQuestions } from './questions/typography';
import { aiQuestions } from './questions/ai';
import { geographyQuestions } from './questions/geography';
import { artQuestions } from './questions/art';
import { cinemaQuestions } from './questions/cinema';

export const quizQuestions: QuizData = {
  web: webQuestions,
  history: historyQuestions,
  design: designQuestions,
  typography: typographyQuestions,
  ai: aiQuestions,
  geography: geographyQuestions,
  art: artQuestions,
  cinema: cinemaQuestions,
};
