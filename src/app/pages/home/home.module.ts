import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home.component';
import { CoursesComponent } from './components/courses/courses.component';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    NewsletterComponent,
    ServicesComponent,
    AboutComponent,
    FaqComponent,
    InstructorComponent,
    ContactComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
