import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  message: string = '';
  isVisible: boolean = false;
  isSuccess: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  show(message: string, success: boolean) {
    this.message = message;
    this.isSuccess = success;
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }
}
