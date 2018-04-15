import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Cucc } from './cucc';

@Injectable()
export class CuccService {

  private cuccokUrl = '/api/cucc';

  constructor(private http: HttpClient) { }

  getCuccok(): Observable<Cucc[]> {
    return this.http.get<Cucc[]>(this.cuccokUrl);
  }

  getCucc(id: string): Observable<Cucc> {
    return this.http.get<Cucc>(this.cuccokUrl + '/' + id);
  }

  createCucc(cucc: Cucc): Observable<string> {
    return this.http.post<string>(this.cuccokUrl, cucc);
  }

  updateCucc(cucc: Cucc): Observable<boolean> {
    return this.http.put<boolean>(this.cuccokUrl + '/' + cucc.id, cucc);
  }

  deleteCucc(id: string): Observable<boolean> {
    return this.http.delete<boolean>(this.cuccokUrl + '/' + id, {});
  }

}
