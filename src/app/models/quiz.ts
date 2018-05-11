
export interface QuizQuestion {
  _id: string;
  category: {_id: string, name: string};
  question: string;
  time: string;
  options: string[];
  answer: string;
}
