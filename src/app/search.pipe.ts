import { Pipe, PipeTransform } from '@angular/core';
import { Human } from './human-list/human.model';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(myHumans: Human[], filterBy: string): any {
    if ( !myHumans) {
      return null;
    }
    if ( filterBy === null || filterBy === undefined  ) {
      return null;
    }
    if (filterBy.trim().length === 0) {
      return myHumans;
    }
    return myHumans.filter(human => human.name.trim().toLowerCase().indexOf(filterBy.trim().toLowerCase()) !== -1);
  }
}
