import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/data/services/films.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styles: [
  ]
})
export class FilmDetailComponent implements OnInit {
  id: number = 0;
  film: any = {};

  constructor(private filmsService: FilmsService, private aRoute: ActivatedRoute) {
      this.aRoute.params.subscribe(param => {
        this.id = param.id;
      });
   }

  ngOnInit(): void {
    this.details();
  }

  details() {    
    this.filmsService.getFilm(this.id).subscribe( 
      res => {
      this.film = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

}
