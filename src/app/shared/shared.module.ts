import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const comps = [
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [comps],
  imports: [
    CommonModule
  ],
  exports: [comps]
})
export class SharedModule { }
