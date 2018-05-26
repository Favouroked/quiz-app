import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(f.value);
    const modified = {};
    modified['question'] = f.value.Question;
    modified['answer'] = f.value.answer;
    modified['options'] = [f.value.option1, f.value.option2, f.value.option3, f.value.option4];
    console.log('Modified');
    console.log(modified);
  }

}
