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
<<<<<<< HEAD
    return this.httpClient.get('http://192.168.127.120:8000/quesbank/getQuestions');
=======
    return this.httpClient.get('http://192.168.83.48:8000/quesbank/fetchques');
>>>>>>> fd1992383f98e3bea18bab5d660fc3004fdc6f3b
  }
  getUsers (){
    return this.httpClient.get('http://192.168.127.120:8000/users/viewUser');
  }
    getNonVerifiedQuestions(){
    return this.httpClient.get('http://192.168.127.120:8000/quesbank/getQuestions');
  }
  verifyUser(student){
    return this.httpClient.post('http://192.168.83.48:8000/users/verifyuser', student, {'headers': {'content-type': 'application/json'}}).subscribe((data)=>console.log(data));
  }
  verifyQuestion(id){
    return this.httpClient.post('http://192.168.83.48:8000/quesbank/verifyques', {"id": id}, {'headers': {'content-type': 'application/json'}}).subscribe((data)=>console.log(data));
  }
}