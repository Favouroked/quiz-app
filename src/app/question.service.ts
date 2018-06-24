import {Injectable} from '@angular/core';
import {QuizQuestion} from './models/quiz';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';


const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()
export class QuestionService {
  questions: QuizQuestion[];
  urls = {
    addQuestions: '/api/add-questions',
    getQuuestions: '/api/get-questions'
  };

  constructor(private http: HttpClient) {
  }

  getQuestions(quiz_id) {
    let params = new HttpParams();
    params = params.append('id', quiz_id);
    return this.http.get<QuizQuestion[]>(this.urls.getQuuestions, {params: params});
  }

  addQuestion(question: QuizQuestion): Observable<QuizQuestion> {
    return this.http.post<QuizQuestion>(this.urls.addQuestions, question, httpOptions);
  }
}
