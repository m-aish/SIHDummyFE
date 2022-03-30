import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }
  addStudents(student: any)
  {
    console.log(student)
    this.httpClient.post('http://localhost:8000/add', student, {'headers': {'content-type': 'application/json'}}).subscribe((data)=>console.log(data));
    this.httpClient.get('http://localhost:8000/view').subscribe((data: any)=>{console.log(data)})
  }
  getQuestions () {
    this.httpClient.get('http://192.168.242.48:3000/getQuestions').subscribe((data)=> {console.log(data)});
  }
}