import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from 'src/app/data/services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styles: [
  ]
})
export class PersonComponent implements OnInit {
  id: number = 0;
  person: any = {};

  constructor(private peopleService: PeopleService, private aRoute: ActivatedRoute) {
      this.aRoute.params.subscribe(param => {
        this.id = param.id;
      });
   }

  ngOnInit(): void {
    this.details();
  }

  details() {    
    this.peopleService.getPerson(this.id).subscribe( 
      res => {
      this.person = res;
      },
      err => {
        console.log(err.message);
      }
    );
  }

}
