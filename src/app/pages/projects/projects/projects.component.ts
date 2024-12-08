import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Project 1: E-Commerce Shop',
      description: 'An online store developed with Angular and Firebase. It allows users to browse products, make purchases, and manage orders.',
      usage: 'Users can add products to the cart and proceed with checkout. It includes simple order and payment features, such as PayPal, Credit Card, or direct debit payments.',
      technologies: 'Technologies: Angular, RXJS, Firebase, NGX-Paypal',
      link: 'https://step-one-theta.vercel.app/startseite',
      imageUrl: 'assets/images/e-commerze.PNG'
    }
  ];
}
