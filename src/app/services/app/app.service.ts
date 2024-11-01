import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// Models:
import { ViewModelMedias } from 'src/app/models/viewmodel-medias';

// RxJS:
import { BehaviorSubject, Observable } from 'rxjs';

// Services:
import { DatasService } from '../datas.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private dataService: DatasService, private router: Router) { }


  private _sozialMedias$:BehaviorSubject<ViewModelMedias[]> = new BehaviorSubject<ViewModelMedias[]>([]);
  public sozialMedias$:Observable<ViewModelMedias[]> = this._sozialMedias$.asObservable();


  public getSozialMedias():void {
    try {
      this.dataService.getSozialMedias().subscribe((data:ViewModelMedias[]) => {
        console.warn(data);
        this._sozialMedias$.next(data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getToSozialMedia(index:number):void {
    switch(index){
      case 0:
        window.open('https://github.com/Patyika1986?tab=repositories', '_blank');
        break;
      case 1:
        window.open('https://www.linkedin.com/in/peter-lakatos-b99793216/', '_blank');
        break;
      case 2:
        this.router.navigate(['cv']);
        break;
    }
  }
}
