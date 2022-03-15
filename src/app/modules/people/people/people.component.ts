import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from 'src/app/data/services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styles: [
  ]
})
export class PeopleComponent implements OnInit {
  people: any[] = [];

  constructor(private peopleService: PeopleService, private router: Router, private aRouter: ActivatedRoute) { }

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
    this.peopleService.listPeople().subscribe( 
      res => {
      this.people = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  search(text: string) {
    this.peopleService.searchPeople(text).subscribe( 
      res => {
      this.people = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

  details(url: string) {
    let url_temp = url.split('/');
    this.router.navigate(['/people', url_temp[5]]);
  }

}
