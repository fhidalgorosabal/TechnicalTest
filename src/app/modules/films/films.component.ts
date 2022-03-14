import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilm } from 'src/app/data/interfaces/film.interface';
import { FilmsService } from 'src/app/data/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styles: [
  ]
})
export class FilmsComponent implements OnInit {
  films: IFilm[] = [];

  constructor(private filmsService: FilmsService, private router: Router, private aRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.aRouter.params.subscribe( res => {
      if(res['text'] && res['text']!='') {
        this.search(res['text']);
      } else {
        this.list();  
      }
    });    
  }

  list() {
    this.filmsService.listFilms().subscribe( 
      res => {
      this.films = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  search(text: string) {
    this.filmsService.searchFilms(text).subscribe( 
      res => {
      this.films = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  details(url: string) {
    let url_temp = url.split('/');
    this.router.navigate(['/film', url_temp[5]]);
  }

}
