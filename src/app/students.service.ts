import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }
  addQuestions(student: any)
  {
    console.log(student)
    this.httpClient.post('http://192.168.83.48:8000/quesbank/addQuestion', student, {'headers': {'content-type': 'application/json'}}).subscribe((data)=>console.log(data));
    this.httpClient.get('http://localhost:8000/view').subscribe((data: any)=>{console.log(data)})
  }
  getQuestions () {
    return this.httpClient.get('http://192.168.83.48:8000/quesbank/fetchques');
  }
  getNonVerifiedQuestions(){
    return this.httpClient.get('http://192.168.83.48:8000/quesbank/getQuestions');
  }
}