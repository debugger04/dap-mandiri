import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from "@angular/router";
import { PageRoutesModule } from './page-routes.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PageRoutesModule
  ]
})
export class PagesModule { }
