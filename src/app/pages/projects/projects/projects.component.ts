import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Projekt 1: E-Commerce-Shop',
      description: 'Ein Online-Shop, der mit Angular und Firebase entwickelt wurde. Es ermöglicht Benutzern, Produkte zu durchsuchen, zu kaufen und Bestellungen zu verwalten.',
      usage: 'Die Benutzer können Produkte hinzufügen und in den Warenkorb legen. Es gibt eine einfache Bestell- und Zahlungsfunktion wie zum Beispiel PayPal, CreditCard oder per Lastschrift.',
      technologies: 'Technologien: Angular, RXjS, Firebase, NGX-Paypal',
      link: 'https://step-one-theta.vercel.app/startseite',
      imageUrl: 'assets/images/e-commerze.PNG'
    }
  ];
}
