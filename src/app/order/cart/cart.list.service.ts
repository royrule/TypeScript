import { Injectable } from '@angular/core';
import { Http } from '@angular/http/src';
import { HumanListService } from '../../human-list/Human-List.service';
import { Observable } from 'rxjs/Rx';
import { Human } from '../../human-list/human.model';
import { Cart } from '../order.model';

@Injectable()
export class CartListService {

    xCart: Cart;

    constructor() {

        this.xCart = new Cart();
        this.xCart = new Array<Human>();
    }

    addToCart( human: Human ) {
        this.xCart.push(human);
        human.quantity = 0;
      }
