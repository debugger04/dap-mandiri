import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ResourcesComponent } from './resources/resources.component';
import { StepsComponent } from './steps/steps.component';
import { FooterComponent } from './footer/footer.component';

const components = [
    HomeComponent,
    ToolbarComponent,
    HighlightComponent,
    ResourcesComponent,
    StepsComponent,
    FooterComponent
]

@NgModule({
  declarations: [
    components
  ],
  exports: [
    components
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
