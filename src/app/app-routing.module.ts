import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';

const routes:Routes=[
  
  {path:'new' ,component:NewComponent},
  {path:'List' ,component:ListComponent},
  
 
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
