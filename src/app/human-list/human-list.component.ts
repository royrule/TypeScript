import { Component, OnInit } from '@angular/core';
import { Human } from './human.model';
import { HUMANS } from './mocks';
import { HumanListService } from './Human-List.service';

@Component({
  selector: 'app-human-list',
  templateUrl: './human-list.component.html',
  styleUrls: ['./human-list.component.css']
})
export class HumanListComponent implements OnInit {

  nombreH: string;
  editable: boolean;
  myHumans: Human[];

  constructor(private humanListService: HumanListService) { }

  ngOnInit() {
    this.humanListService.getHumanList()
                  .subscribe(myHumans => this.myHumans = myHumans);
  }

  totalHumans() {
    let sum = 0;
    for (let myHuman of this.myHumans) { // siempre poner this.
      sum += myHuman.stock;
    }
    return this.myHumans.length;

  }

  upQuantity(human: Human) {
    human.quantity++;
    human.stock--;
  }
  downQuantity(human: Human) {
    human.quantity--;
    human.stock++;
  }

  getUpdateService( human: Human) {

    this.humanListService.updateHuman(human).subscribe();
  }



 /* showKey(event) {
    alert(event.keyCode);
  }
  getCoord(event) {
    console.log(event.clientX + ' ' + event.clientY);

  }
  */

  //  return this.myHumans.reduce(function(prev, current) { return prev + current.stock; }, 0);

  // return this.myHumans.reduce( (prev, current) => prev + current.stock, 0)
}
