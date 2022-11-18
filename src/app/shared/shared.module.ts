import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from "@angular/router";

const comps = [
  HeaderComponent,
  FooterComponent,
  NotFoundComponent
]

@NgModule({
  declarations: [comps, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [comps]
})
export class SharedModule { }
