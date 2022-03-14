import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/data/services/api.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styles: [
  ]
})
export class FilmComponent implements OnInit {
  id: number = 0;
  film: any = {};

  constructor(private service: ApiService, private aRoute: ActivatedRoute) {
      this.aRoute.params.subscribe(param => {
        this.id = param.id;
      });
   }

  ngOnInit(): void {
    this.details();
  }

  details() {    
    this.service.getFilm(this.id).subscribe( 
      res => {
      this.film = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

}
