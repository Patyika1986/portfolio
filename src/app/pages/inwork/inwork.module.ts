import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InworkComponent } from './inwork/inwork.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InworkComponent
  }
]

@NgModule({
  declarations: [
    InworkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InworkModule { }
