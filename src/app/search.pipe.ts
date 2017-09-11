import { Pipe, PipeTransform } from '@angular/core';
import { Human } from './human-list/human.model';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Human[], filterBy: string): Human[] {
    if (filterBy && filterBy.trim().length === 0) {
     return items;
    }
     return items.filter(human => human.name.trim().toLowerCase().indexOf(filterBy.trim().toLowerCase()) !== -1);
    }

}
