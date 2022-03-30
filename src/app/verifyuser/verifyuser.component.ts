import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.scss']
})
export class VerifyuserComponent implements OnInit {

  constructor(private studentsService: StudentsService) { }
  users: any;
  ngOnInit(): void {
    this.studentsService.getUsers().subscribe((data)=>{
      this.users = data;
    })
  }

}
