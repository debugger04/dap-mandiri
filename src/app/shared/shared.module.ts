import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from "@angular/router";
import { HighlightDirective } from './directives/highlight.directive';
import { ButtonStyleDirective } from './directives/button-style.directive';
import { CustomDatePipe } from './pipes/custom-date.pipe';

const comps = [
  HeaderComponent,
  FooterComponent,
  NotFoundComponent,
  HighlightDirective,
  ButtonStyleDirective,
  CustomDatePipe
]

@NgModule({
  declarations: [comps],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [comps]
})
export class SharedModule { }
