import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS:
import { map, Observable } from 'rxjs';

// Models:
import { ViewModelMedias } from '../models/viewmodel-medias';


@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private http: HttpClient) { }


  getSozialMedias():Observable<ViewModelMedias[]> {
    return this.http.get<{ sozialMedias: ViewModelMedias[] }>('assets/db/db.json').pipe(
      map(response => response.sozialMedias)
    );    
  }


}
