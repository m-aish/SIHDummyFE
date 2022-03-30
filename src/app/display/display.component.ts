import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(private studentsService: StudentsService) { }
  questions: any;
  ngOnInit(): void {
    this.studentsService.getQuestions().subscribe((data)=>{
      this.questions = data;
    })
  }
}
