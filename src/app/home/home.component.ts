import {Component, OnInit} from '@angular/core';
import {QuizModel} from '../models/quiz_model';
import {QuizService} from '../quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quizzes: QuizModel[];

  constructor(private Quiz: QuizService) {
  }

  ngOnInit() {
    this.Quiz.getQuizzes()
      .subscribe((data: QuizModel[]) => this.quizzes = data);
  }

}
