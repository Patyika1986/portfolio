import { Component, signal } from '@angular/core';
import { ViewModelMedias } from 'src/app/models/viewmodel-medias';
import { AppService } from 'src/app/services/app/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
