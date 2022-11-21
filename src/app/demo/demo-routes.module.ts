import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChildAaComponent } from "./comp-a/child-aa/child-aa.component";
import { ChildTetehComponent } from "./comp-a/child-teteh/child-teteh.component";
import { CompAComponent } from "./comp-a/comp-a.component";
import { CompBComponent } from "./comp-b/comp-b.component";

const routes: Routes = [
    {
      path: 'comp-a',
      component: CompAComponent,
      children: [
        {
          // eager loading
          path: 'child-aa', // -> /component-a/child-aa
          component: ChildAaComponent
        },
        {
          path: 'child-teteh', // /component-a/child-ab
          component: ChildTetehComponent
        },
        // {
        //   path: '',
        //   redirectTo: '/demo/comp-a/child-aa',
        //   pathMatch: 'full'
        // }
      ]
    },
    {
      path: 'comp-b/:id',
      component: CompBComponent
    },
    {
        path: '',
        redirectTo: '/demo/comp-a/child-aa',
        pathMatch: "full"
    }
  ];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutesModule { }