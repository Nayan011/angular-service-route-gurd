import { Component } from '@angular/core';

import {StudentService} from './student.service';
import {Student} from './Student';

@Component({
  selector: 'students-app',
  template:`
   Student list:
   <ul>
   <li *ngFor="let st of studentList">
     <h3>Name:{{st.name}} <a [routerLink]="['/profile',st.id]">See profile</a></h3>
   </li>
   
 </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class studentsComponent {

  
  studentList:Student[]=[];
  constructor(private stService:StudentService){
   this.studentList=stService.getStudents();
  
  }
}