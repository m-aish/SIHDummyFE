import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { observable } from 'rxjs';
import { StudentsService } from '../students.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  question = new FormControl();
  option1 = new FormControl();
  option2 = new FormControl();
  option3 = new FormControl();
  option4 = new FormControl();
  answer = new FormControl();
  tags = new FormControl();
  explanation = new FormControl();
  constructor(private httpClient: HttpClient, private studentsService: StudentsService) { }

  ngOnInit(): void {
    //fetch('http://localhost:8000/view').then((data)=>console.log(data));
    //this.httpClient.post('http://localhost:8000/add', {name:"rishi1", std:12, regnum:374}, {'headers': {'content-type': 'application/json'}}).subscribe((data)=>console.log(data));
  }
  addStudents() {
    let student ={
      question: this.question.value,
      option1: this.option1.value,
      option2: this.option2.value,
      option3: this.option3.value,
      option4: this.option4.value,
      answer: this.answer.value,
      tags: this.tags.value,
      explanation: this.explanation.value,
    }
    //console.log(student);
    this.studentsService.addStudents(student);
  }
}