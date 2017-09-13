import { Component, OnInit } from '@angular/core';
 import { Human } from './human.model';
import { HUMANS } from './mocks';
import { HumanListService } from './Human-List.service';
import { Cart } from '../order/order.model';
import { CartListService } from '../order/cart/cart.list.service';

@Component({
  selector: 'app-human-list',
  templateUrl: './human-list.component.html',
  styleUrls: ['./human-list.component.css']
})
export class HumanListComponent implements OnInit {

  nombreH = ''; // search
  myHumans: Human[];
   carrito: Human[];

  constructor(private humanListService: HumanListService, cartListService: CartListService) { }

  ngOnInit() {
    this.humanListService.getHumanList()
                  .subscribe(myHumans => this.myHumans = myHumans);
    this.carrito = new Array<Human>();
  }

  totalHumans() {
    let sum = 0;
    if ( this.myHumans ) {
      for (let myHuman of this.myHumans) { // siempre poner this.
        sum += myHuman.stock;
      }
      return this.myHumans.length;
    }
  }

  upQuantity(human: Human) {
    human.quantity++;
    human.stock--;
  }
  downQuantity(human: Human) {
    human.quantity--;
    human.stock++;
  }
  public disabled(human: Human) {
    if (human.editable) {
      human.editable = false;
    }else {
      human.editable = true;
    }
  }

  getUpdateService( human: Human) {

    this.humanListService.updateHuman(human).subscribe();
  }

  addToCart( human: Human ) {
    this.carrito.push(human);
    human.quantity = 0;
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
