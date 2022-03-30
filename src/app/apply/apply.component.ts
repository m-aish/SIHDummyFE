import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { observable } from 'rxjs';
import { StudentsService } from '../students.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.scss']
})
export class ApplyComponent implements OnInit {
  name = new FormControl();
  desig = new FormControl();
  org = new FormControl();
  email = new FormControl();
  qlf = new FormControl();
  exp = new FormControl();
  constructor(private httpClient: HttpClient, private studentsService: StudentsService) { }

  ngOnInit(): void {
  }
  addAppliedUser() {
    let student ={
      name: this.name.value,
      desig: this.desig.value,
      org: this.org.value,
      email: this.email.value,
      qlf: this.qlf.value,
      exp: this.exp.value,
    }
    //console.log(student);
    this.studentsService.addStudents(student);
  }
}
