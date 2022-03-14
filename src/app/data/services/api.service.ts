import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
import { IFilm } from '../interfaces/film.interface';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Observable } from 'rxjs';
import { IPerson } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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

  listPeople(): Observable<IPerson[]> {
    return this.http.get(`${ this.url }/people`)
           .pipe(map( this.arrayPeople ));
  }

  getPerson(id: number): Observable<IPerson> {
    return this.http.get(`${ this.url }/people/${ id }`)
            .pipe(map( this.person ));
  }

  searchPeople(text: string): Observable<IPerson[]> {
    return this.http.get(`${ this.url }/people/?search=${ text }`)
           .pipe(map( this.arrayPeople ));
  }

  private arrayPeople(resp: any) {
    const people: IPerson[] = [];
    const data = resp.results;
    data.forEach((element: any) => {
      const person: IPerson = element;      
      people.push(person);
    });
    return people;
  }

  private person(resp: any) {
    const person: IPerson = resp; 
    return person;
  }

  getHomeworld(urlPlanets: string): Observable<string> {
    return this.http.get( urlPlanets )
           .pipe(map( (data: any) => (data.name) ));
  }
}
