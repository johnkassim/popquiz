import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { QuizComponent } from './quiz/quiz.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'login', pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },


  {
    path: 'add',
    component: AddStudentComponent
  },

  {
    path: 'edit/:id',
    component: EditStudentComponent
  },

  {
    path: 'list',
    component: ListStudentComponent
  },

  {
    path: 'register',
    component: SignupComponent
  },

  {
    path: 'quiz',
    component: QuizComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'faq',
    component: FaqComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
