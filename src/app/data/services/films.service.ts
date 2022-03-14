import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IFilm } from '../interfaces/film.interface';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  url = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

  listFilms(): Observable<IFilm[]> {
    return this.http.get(`${ this.url }/films`)
           .pipe(map( this.arrayFilms ));
  }

  getFilm(id: number): Observable<IFilm> {
    return this.http.get(`${ this.url }/films/${ id }`)
            .pipe(map( this.film ));
  }

  searchFilms(text: string): Observable<IFilm[]> {
    return this.http.get(`${ this.url }/films/?search=${ text }`)
           .pipe(map( this.arrayFilms ));
  }

  private arrayFilms(resp: any) {
    const films: IFilm[] = [];
    const data = resp.results;
    data.forEach((element: any) => {
      const film: IFilm = element;      
      films.push(film);
    });
    return films;
  }

  private film(resp: any) {
    const film: IFilm = resp; 
    return film;
  }
}
