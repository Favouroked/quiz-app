
export interface QuizQuestion {
  _id: string;
  quiz_id: string;
  question: string;
  time: string;
  options: string[];
  answer: string;
}
