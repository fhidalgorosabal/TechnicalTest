import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPerson } from '../interfaces/person.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url = 'https://swapi.dev/api';

  constructor(private http: HttpClient) { }

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
}
