import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-formgenerate',
  templateUrl: './formgenerate.component.html',
  styleUrls: ['./formgenerate.component.scss']
})
export class FormgenerateComponent implements OnInit {
  subject = new FormControl()
  numberofquestions = new FormControl()
  difficulty = new FormControl()
  header =  new FormControl()
  constructor(private httpClient: HttpClient, private studentsService: StudentsService) { }

  ngOnInit(): void {
    //fetch('http://localhost:8000/view').then((data)=>console.log(data));
    //this.httpClient.post('http://localhost:8000/add', {name:"rishi1", std:12, regnum:374}, {'headers': {'content-type': 'application/json'}}).subscribe((data)=>console.log(data));
  }

}
