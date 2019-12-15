import {ChangeDetectionStrategy, Component, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
  styleUrls: ['./cart.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartPage implements OnInit {

  selectedTab: number;

  // Presentational component
  constructor() {
  }

  ngOnInit() {
    this.selectedTab = 3;
  }

  // Refactor this to use @hostbinding and @hostlistener
  //  Refactor, use  @ViewChild for DOM ACCESS
  ionViewDidEnter() {
    const cartElement = document.querySelector('#cart');

    const event = new CustomEvent('cartviewonenter', {
      detail: {}
    });
    cartElement.dispatchEvent(event);
  }

  purchase() {

    const cartElement = document.querySelector('#cart');

    const event = new CustomEvent('purchase', {
      detail: {}
    });
    cartElement.dispatchEvent(event);

  }
}


