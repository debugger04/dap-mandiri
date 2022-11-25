import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { InstructorComponent } from './components/instructor/instructor.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { HomeRoutesModule } from './home-routes.module';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    NewsletterComponent,
    ServicesComponent,
    AboutComponent,
    FaqComponent,
    InstructorComponent,
    CoursesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutesModule
  ]
})
export class HomeModule { }
