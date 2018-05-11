import {Component, OnInit} from '@angular/core';
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
  question: QuizQuestion;
  counter = 0;

  constructor(public qs: GetQuizService) {
  }

  ngOnInit() {
    this.questions = this.qs.getQuestions();
    this.question = this.questions[this.counter];
  }

  nextQuestion() {
    ++this.counter;
    this.question = this.questions[this.counter];
  }

  isAnswer(answerIndex): void {
    const quest = this.questions[this.counter];
    if (answerIndex == quest.answer) {
      this.correct = true;
    } else {
      this.correct = false;
    }
  }
}
