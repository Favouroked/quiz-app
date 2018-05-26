import { Component, OnInit } from '@angular/core';
import {GetQuizService} from '../get-quiz.service';
import {QuizQuestion} from '../models/quiz';
import {QuizModel} from '../models/quiz_model';
import {QuizService} from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quizzes: QuizModel[];

  constructor(private getQuiz: QuizService) { }

  ngOnInit() {
    this.quizzes = this.getQuiz.getQuizzes();
  }

}
