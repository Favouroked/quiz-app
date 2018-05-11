import { Component, OnInit } from '@angular/core';
import {GetQuizService} from '../get-quiz.service';
import {QuizQuestion} from '../models/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: QuizQuestion[];
  correct: boolean;
  constructor(public qs: GetQuizService) { }

  ngOnInit() {
    this.questions = this.qs.getQuestions();
  }

  isAnswer(answerIndex, questionIndex): void {
    const quest = this.questions[questionIndex];
    if (answerIndex == quest.answer) {
      this.correct = true;
    } else {
      this.correct = false;
    }
  }
}
