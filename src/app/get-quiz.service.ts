import {Injectable} from '@angular/core';
import {QuizQuestion} from './models/quiz';

@Injectable()
export class GetQuizService {
  questions: QuizQuestion[];

  constructor() {
    this.questions = [
      {
        _id: '1',
        quiz_id: 'abc123',
        question: 'What is 1+1',
        time: '30',
        options: ['1', '2', '3', '4'],
        answer: '1'
      },
      {
        _id: '2',
        quiz_id: 'abc123',
        question: 'What is 2 x 2',
        time: '30',
        options: ['10', '4', '8', '9'],
        answer: '1'
      }
    ];
  }

  getQuestions() {
    return this.questions;
  }


}
