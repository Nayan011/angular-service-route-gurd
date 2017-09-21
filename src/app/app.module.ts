import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {StudentService} from './student.service';
import {ProfileComponent}  from './student.profile';
import {studentsComponent} from './students.component';
import {homepageComponent} from './homepage';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    studentsComponent,
    homepageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path:"",redirectTo:"/home",pathMatch:"full"
      },
      {
        path:"home",component:homepageComponent
      },
      {
        path:"students",component:studentsComponent
      },
      {
        path:"profile/:id",component:ProfileComponent
      }
    ])
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
