import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeworldService {
  url = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  getHomeworld(urlPlanets: string): Observable<string> {
    return this.http.get( urlPlanets )
           .pipe(map( (data: any) => (data.name) ));
  }
}
