import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { ChildAaComponent } from './comp-a/child-aa/child-aa.component';
import { ChildTetehComponent } from './comp-a/child-teteh/child-teteh.component';
import { DemoRoutesModule } from './demo-routes.module';


@NgModule({
  declarations: [
    CompAComponent,
    CompBComponent,
    ChildAaComponent,
    ChildTetehComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DemoRoutesModule
  ]
})
export class DemoModule { }
