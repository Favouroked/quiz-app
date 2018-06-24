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
    const modified = {};
    modified['question'] = f.value.Question;
    modified['answer'] = f.value.answer;
    modified['options'] = [f.value.option1, f.value.option2, f.value.option3, f.value.option4];
    modified['quiz_id'] = this.quiz_id;
    modified['time'] = f.value.time;
    modified['_id'] = this.qs.getNewId();
    // console.log('Modified');
    this.qs.addQuestion(modified);
    // console.log(modified);
    f.resetForm();
  }

  done() {
    this.router.navigate(['/']);
  }

}
