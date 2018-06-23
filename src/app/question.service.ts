import {Injectable} from '@angular/core';
import {QuizQuestion} from './models/quiz';

@Injectable()
export class QuestionService {
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

  getQuestions(quiz_id) {
    return this.questions.filter(qs => qs.quiz_id === quiz_id);
  }

  getNewId() {
    return this.questions.length;
  }

  addQuestion(question) {
    this.questions.push(question);
  }

}
