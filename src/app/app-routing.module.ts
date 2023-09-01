import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModifytaskComponent } from './modifytask/modifytask.component';

const routes: Routes = [
  {
    path:'',
    component:HomepageComponent
  },
  {
    path:'addtask/:status',
    component:AddtaskComponent
  },
  {
    path:'task/:id',
    component:ModifytaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
