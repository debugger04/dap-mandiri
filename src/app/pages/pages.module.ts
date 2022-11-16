import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { PagesComponent } from './pages.component';
import { CoursesModule } from './courses/courses.module';



@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    CoursesModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
