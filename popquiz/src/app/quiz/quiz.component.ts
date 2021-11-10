import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public quizForm !: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.quizForm = this.formBuilder.group({
      score:['']
    })
  }

  score(){
    this.http.post<any>("http://localhost:3000/score", this.quizForm.value).subscribe(result =>{
     alert("Success");
    //  this.quizForm.reset();
    })
  }

}
