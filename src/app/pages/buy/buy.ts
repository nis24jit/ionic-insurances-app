import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html',
  styleUrls: ['./buy.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuyPage implements OnInit {
  selectedTab: number;

  // Presentational component
  constructor() {
  }


  ngOnInit() {
    this.selectedTab = 2;

  }

  // Refactor, use  @ViewChild for DOM ACCESS
  ionViewDidEnter() {
    const buyElement = document.querySelector('#buy');

    const event = new CustomEvent('buyviewonenter', {
      detail: {}
    });
    buyElement.dispatchEvent(event);

  }
}
