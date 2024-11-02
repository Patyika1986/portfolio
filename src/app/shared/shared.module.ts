import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NotificationComponent
  ]
})
export class SharedModule { }
