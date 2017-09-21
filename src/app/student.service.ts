import {Injectable} from '@angular/core';
import {Student} from './Student';
import {Students} from './student-list';

@Injectable()
export class StudentService{

    getStudents():Student[]
    {
      return Students;

    }

  // num:number=0;

    getSingleStudent(sid:number):Student{
        console.log(sid);
     return Students.find(x=>x.id==sid);
    }
}
