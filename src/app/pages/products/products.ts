import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
  styleUrls: ['./products.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsPage implements OnInit {
  selectedTab: number;

  // Presentational component
  constructor() {

  }

  ngOnInit() {
    this.selectedTab = 1;
  }

}
