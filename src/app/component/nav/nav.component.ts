import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent   {
  private toggle: boolean = false;

  toggleFunction() {
    this.toggle = !this.toggle;
    const navUl = document.querySelector('.nav-ul') as HTMLElement;
    const buttonX = document.querySelector('#x') as HTMLElement;
    const menuButton = document.querySelector('#nav-menu') as HTMLElement;

    this.toggle
      ? navUl.classList.add('expand')
      : navUl.classList.remove('expand');

    this.toggle
      ? (buttonX.style.display = 'none')
      : (buttonX.style.display = 'block');
    this.toggle
      ? (menuButton.style.display = 'block')
      : (menuButton.style.display = 'none');

    this.toggle
      ? (buttonX.style.display = 'block')
      : (buttonX.style.display = 'none');
    this.toggle
      ? (menuButton.style.display = 'none')
      : (menuButton.style.display = 'block');      
  }

  navToggle() {
    this.toggleFunction();
  }

  xnavToggle() {
    this.toggleFunction();
  }
}
