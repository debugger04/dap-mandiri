import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './components/course/course.component';
import { RouterModule } from '@angular/router';
import { CoursesRoutesModule } from './courses-routes.module';



@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoursesRoutesModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CoursesModule { }
