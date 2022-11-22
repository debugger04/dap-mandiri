import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { ChildAaComponent } from './comp-a/child-aa/child-aa.component';
import { ChildTetehComponent } from './comp-a/child-teteh/child-teteh.component';
import { DemoRoutesModule } from './demo-routes.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    CompAComponent,
    CompBComponent,
    ChildAaComponent,
    ChildTetehComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DemoRoutesModule
  ]
})
export class DemoModule { }
