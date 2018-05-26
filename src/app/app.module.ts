import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import {GetQuizService} from './get-quiz.service';
import { QuizFormComponent } from './quiz-form/quiz-form.component';
import { HomeComponent } from './home/home.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import {QuizService} from './quiz.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add-quiz', component: QuizFormComponent},
  {path: 'quiz/:id', component: QuizComponent},
  {path: 'add-questions/:id', component: AddQuestionsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizFormComponent,
    HomeComponent,
    AddQuestionsComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    GetQuizService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
