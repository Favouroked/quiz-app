import {Injectable} from '@angular/core';
import {QuizModel} from './models/quiz_model';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class QuizService {
  urls = {
    getQuiz: '/api/get-quiz',
    addQuiz: '/api/add-quiz'
  };

  constructor(private http: HttpClient) {
  }

  getQuizzes() {
    return this.http.get(this.urls.getQuiz, httpOptions);
  }

  addQuizzes(quiz): Observable<QuizModel> {
    return this.http.post<QuizModel>(this.urls.addQuiz, quiz, httpOptions);
  }
}
