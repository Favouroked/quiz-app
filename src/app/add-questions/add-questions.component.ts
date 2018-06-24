import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  quiz_id: string;

  constructor(private route: ActivatedRoute, private router: Router, private qs: QuestionService) {
  }

  ngOnInit() {
    this.quiz_id = this.route.snapshot.paramMap.get('id');
  }

  onSubmit(f: NgForm) {
    // console.log(f.value);
    const modified = {
      question : f.value.Question,
      answer : f.value.answer,
      options : [f.value.option1, f.value.option2, f.value.option3, f.value.option4],
      quiz_id : this.quiz_id,
      time : f.value.time,
    };
    this.qs.addQuestion(modified)
      .subscribe(
        questions => console.log('Question', questions),
        err => console.log(err),
        () => f.resetForm()
      );
  }

  done() {
    this.router.navigate(['/']);
  }

}
