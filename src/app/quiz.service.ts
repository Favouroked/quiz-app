import {Injectable} from '@angular/core';
import {QuizModel} from './models/quiz_model';

@Injectable()
export class QuizService {
  quizzes: QuizModel[];

  constructor() {
    this.quizzes = [
      {
        _id: 'abc123',
        title: 'Sample Title',
        description: 'Sample Description'
      }
    ];
  }

  getQuizzes() {
    return this.quizzes;
  }

  addQuizzes(quiz) {
    this.quizzes.push(quiz);
  }

  getNewId() {
    return this.quizzes.length;
  }

}
