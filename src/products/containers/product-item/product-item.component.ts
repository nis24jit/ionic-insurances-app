import {Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Insurance} from '../../models/insurance.model';

// Move this to a constants file
const INITIAL_INSURANCE_VAL = 1;
const FINAL_INSURANCE_VAL = 6;


// This component is a smart component that is aware of the store
// It dispatches actions and reads data from the store

@Component({
  selector: 'product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl: 'product-item.html',
})
export class ProductItemComponent implements OnInit {

  @Input()
  insurance: Insurance;

  @Input()
  selectedTab: number;


  @Output()
  purchaseEvent: EventEmitter<Insurance> = new EventEmitter<Insurance>();

  @Output()
  removeEvent: EventEmitter<Insurance> = new EventEmitter<Insurance>();


  private searchItemList = [];


  constructor(private store: Store<fromStore.ProductsState>) {

  }

  ngOnInit() {
    this.registerPurchaseEvent();
    this.registerBuyOnViewDidEnter();

  }
  // Below functions update slices of the state tree using selectors
  // Maintaing immutability of the state
  onAddInsurance(selected: Insurance) {
    const insurance: Insurance = {...selected};
    insurance.isInCart = true;
    insurance.isBought = false;
    this.store.dispatch(new fromStore.UpdateInsurance(insurance));
    this.toggleIcon(insurance);
  }

  onRemoveInsurance(selected: Insurance) {
    const insurance: Insurance = {...selected};
    insurance.isInCart = false;
    insurance.isBought = false;
    this.store.dispatch(new fromStore.UpdateInsurance(insurance));
    this.removeEvent.emit();
  }
  //  Refactor, use  @ViewChild for DOM ACCESS
  registerPurchaseEvent() {
    const cartElement = document.querySelector('#cart');
    const that = this;
    if (cartElement) {
      cartElement.addEventListener('purchase', function (event) {
        event.stopImmediatePropagation();
        that.purchaseEvent.emit();
      }, true);
    }
  }

  //  Refactor, use  @ViewChild for DOM ACCESS
  registerBuyOnViewDidEnter() {
    const buyElement = document.querySelector('#buy');
    const that = this;
    if (buyElement) {
      buyElement.addEventListener('buyviewonenter', function (event) {
        event.stopImmediatePropagation();
        that.setSearchHandler();
      }, true);
    }
  }

  // create the collection object for the search bar and then add event listeners
  setSearchHandler() {
    for (let listIndex = INITIAL_INSURANCE_VAL; listIndex <= FINAL_INSURANCE_VAL; listIndex++) {
      const selector = document.querySelector(`#pur${listIndex}`);
      if (selector) {
        this.searchItemList.push(Array.from(document.querySelector(`#pur${listIndex}`).children));
      }
    }
    const searchbar = document.querySelector('ion-searchbar');
    const items = this.searchItemList;
    searchbar.addEventListener('ionInput', handleInput);

    function handleInput(event) {
      const query = event.target.value.toLowerCase();
      requestAnimationFrame(() => {
        items.forEach(item => {
          const itemObj = item[0];
          const shouldShow = itemObj.textContent.toLowerCase().indexOf(query) > -1;
          itemObj.style.display = shouldShow ? 'block' : 'none';

        });
      });
    }
  }
  //  Refactor, use  @ViewChild for DOM ACCESS
  toggleIcon(icon) {
    const element = `in${icon.id}`;
    // Definitely needs refactoring, use [ngClass]
    setTimeout(() => document.getElementById(element).style.color = 'grey'
    );

  }

}
