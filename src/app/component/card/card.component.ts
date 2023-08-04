import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input({required:true}) title: string = 'Kontaktbuch';
  @Input({required:true}) description: string = 'Ein Kontaktbuch, wo Sie alle Ihre Kontakte eintragen können, bearbeiten und natürlich löschen';
  @Input({required:true}) tools: string = 'Angular, SCSS, TypeScript, Node.js, express';
  @Input({required:true}) img:string = 'assets/img/diary.jpg';
  @Input({required:true}) alt:string = 'Kontakt Buch Bild';

}
