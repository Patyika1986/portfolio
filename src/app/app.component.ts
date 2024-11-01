import { Component, OnInit, signal } from '@angular/core';
import { AppService } from './services/app/app.service';
import { ViewModelMedias } from './models/viewmodel-medias';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = "Frontend Developer";

  private _startDate: Date = new Date(2022, 0, 6);
  public years = signal(0);
  public months = signal(0);

  public sozielMedia:ViewModelMedias[] = [];

  public isAboutActive:boolean = true;
  public projects = signal(8);

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.calculateExperience();
    this.appService.getSozialMedias();
    this.appService.sozialMedias$.subscribe((data) => {
      if (data.length > 0) {
        this.sozielMedia = data;
      }
    });
  }

  public openLink(index:number):void {
    this.appService.getToSozialMedia(index);
    console.warn(index)
  }

  calculateExperience(): void {
    const currentDate = new Date();
    let years = currentDate.getFullYear() - this._startDate.getFullYear();
    let months = currentDate.getMonth() - this._startDate.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    this.years.set(years);
    this.months.set(months);
  }

  public showSkills():void {
    this.isAboutActive = false;
  }

  public showAbout():void {
    this.isAboutActive = true;
  }
}
