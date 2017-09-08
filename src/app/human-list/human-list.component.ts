import { Component, OnInit } from '@angular/core';
import { Human } from './human.model';
import { HUMANS } from './mocks';
@Component({
  selector: 'app-human-list',
  templateUrl: './human-list.component.html',
  styleUrls: ['./human-list.component.css']
})
export class HumanListComponent implements OnInit {

    myHumans: Human[];

  constructor() {}

  ngOnInit() {
    this.myHumans = HUMANS;
  }

  totalHumans() {
    let sum = 0;
    for (let myHuman of this.myHumans) { // siempre poner this.
      sum += myHuman.stock;
    }
    return sum;

  }

  upQuantity(human: Human) {
    human.quantity++;
    human.stock--;
  }
  downQuantity(human: Human) {
    human.quantity--;
    human.stock++;
  }
  showKey(event) {
    alert(event.keyCode);
  }
getCoord(event) {
  console.log(event.clientX + ' ' + event.clientY);

}
searchHuman(Human) {

}
//  return this.myHumans.reduce(function(prev, current) { return prev + current.stock; }, 0);

// return this.myHumans.reduce( (prev, current) => prev + current.stock, 0)
}
