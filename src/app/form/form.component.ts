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
  name = new FormControl();
  regnum = new FormControl();
  std = new FormControl();
  constructor(private httpClient: HttpClient, private studentsService: StudentsService) { }

  ngOnInit(): void {
    //fetch('http://localhost:8000/view').then((data)=>console.log(data));
    //this.httpClient.post('http://localhost:8000/add', {name:"rishi1", std:12, regnum:374}, {'headers': {'content-type': 'application/json'}}).subscribe((data)=>console.log(data));
  }
  addStudents() {
    let student ={
      name: this.name.value,
      regnum: parseInt(this.regnum.value),
      std: parseInt(this.std.value)
    }
    //console.log(student);
    this.studentsService.addStudents(student);
  }
}