import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-displaynotverified',
  templateUrl: './displaynotverified.component.html',
  styleUrls: ['./displaynotverified.component.scss']
})
export class DisplaynotverifiedComponent implements OnInit {
  constructor(private studentsService: StudentsService) { }
  questions: any;
  arrsy = [];
  ngOnInit(): void {
    
    this.studentsService.getQuestions().subscribe((data)=>{
      for (let variable in data) {
        if((data[variable].isVerified) == true)
        {
          console.log(data[variable].content)
          this.arrsy.push(data[variable])
        }
      }
      console.log(this.arrsy)
    });
  }
  verify (id) {
    console.log(id);
  }
}
