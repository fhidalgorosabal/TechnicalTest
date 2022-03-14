import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeworldService } from 'src/app/data/services/homeworld.service';

@Pipe({
  name: 'homeworld'
})
export class HomeworldPipe implements PipeTransform {

  constructor(private homeworldService: HomeworldService){}

  transform(value: string): Observable<string> {
    return this.homeworldService.getHomeworld(value);
  }

}
