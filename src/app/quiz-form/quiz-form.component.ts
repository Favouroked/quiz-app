import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {QuizService} from '../quiz.service';
import {QuizModel} from '../models/quiz_model';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {
  newQuiz: QuizModel;

  constructor(private router: Router, private Quiz: QuizService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const quiz_id = this.Quiz.getNewId();
    const new_quiz = {_id: quiz_id, ...f.value};
    // console.log(new_quiz);
    this.Quiz.addQuizzes(new_quiz);
    this.router.navigate(['/add-questions', quiz_id]);
    // this.router.navigate(['/']);
  }

}
