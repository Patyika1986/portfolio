import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS:
import { map, Observable } from 'rxjs';

// Models:
import { ViewModelMedias } from '../models/viewmodel-medias';
import { ViewModelEmploymentReference } from '../models/viewmodel-employmentreference';


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

  getReferences():Observable<ViewModelEmploymentReference[]> {
    return this.http.get<{ reference: ViewModelEmploymentReference[] }>('assets/db/db.json').pipe(
      map(response => response.reference)
    );
  }


}
