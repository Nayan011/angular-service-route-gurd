import { Component,OnDestroy } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import {StudentService} from './student.service';
import {Student} from './Student';

@Component({
  selector: 'student-profile',
  template:`
   Student Profile:
   <h3>Id: {{student.id}}</h3>
   <h3>Name: {{student.name}} </h3>
   <h3>Student Id: {{student.studId}}</h3>
   <h3>Email: {{student.email}}</h3>
  `,
  styleUrls: ['./app.component.css']
})
export class ProfileComponent implements OnDestroy {
  subscription:Subscription;
  student:Student;
  stid:number;
  constructor(private activatedRoute:ActivatedRoute,private stService:StudentService){
   this.subscription= activatedRoute.params.subscribe((x)=>{this.stid=x['id'];
 console.log(this.stid);
});
this.student=stService.getSingleStudent(this.stid);
   
  }

ngOnDestroy():void{
    this.subscription.unsubscribe();
}

}
