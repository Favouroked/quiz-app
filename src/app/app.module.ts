import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import {GetQuizService} from './get-quiz.service';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GetQuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
