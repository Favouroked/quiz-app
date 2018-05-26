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
  answer: string;
  displayInfo: boolean;
  question: QuizQuestion;
  counter = 0;
  displayAnswer: boolean;
  endquiz: boolean;
  score: number;

  constructor(public qs: GetQuizService) {
  }

  ngOnInit() {
    this.questions = this.qs.getQuestions();
    this.question = this.questions[this.counter];
    this.displayAnswer = false;
    this.endquiz = false;
    this.score = 0;
  }

  endQuiz() {
    this.endquiz = true;
  }

  nextQuestion() {
    ++this.counter;
    this.question = this.questions[this.counter];
    this.displayAnswer = false;
    this.displayInfo = false;
    if (this.counter >= this.questions.length) {
      this.endQuiz();
    }
  }

  isAnswer(answerIndex): void {
    const quest = this.questions[this.counter];
    const ansIndex = quest.answer;
    if (answerIndex == quest.answer) {
      this.correct = true;
      this.displayAnswer = true;
      ++this.score;
      setTimeout(() => {
        console.log('Right answer');
        this.nextQuestion();
      }, 3000);
    } else {
      this.correct = false;
      this.answer = quest.options[ansIndex];
      this.displayInfo = true;
      this.displayAnswer = true;
      setTimeout(() => {
        console.log('Wrong answer');
        this.nextQuestion();
      }, 3000);
    }
  }
}
