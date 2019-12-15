import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import {Insurance} from '../../models/insurance.model';
import {BehaviorSubject} from 'rxjs';

enum Tabs {
  Products = 1,
  Buy = 2,
  Cart = 3,
}

// Move this to a constants file
const BUY_INSURANCES = 'BUY INSURANCES';
const INSURANCES = 'INSURANCES';

// This component is a smart component that is aware of the store
// it dispatches actions and reads data from the store
@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  template: `
      <span><h5 class="products__header">{{headerText}}</h5></span>
      <div class="products" *ngFor="let insurance of (insurances$|async) ">
          <product-item [insurance]="insurance" [selectedTab]="selectedTab" (purchaseEvent)="purchaseInsurance()"
                        (removeEvent)="removeInsurance()"></product-item>
      </div>
  `,
})
export class ProductsComponent implements OnInit {

  headerText: string;

  @Input()
  selectedTab: number;

  // Declare the observable stream for insurances
  private insuranceSubject = new BehaviorSubject<Insurance[]>([]);
  insurances$ = this.insuranceSubject.asObservable();

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  ngOnInit() {
    this.headerText = (Tabs.Cart === this.selectedTab || Tabs.Buy === this.selectedTab) ? BUY_INSURANCES : INSURANCES;
    this.refreshView();
    this.registerCartViewOnEnter();
  }

  refreshView() {
    this.insurances$ = this.store.select(fromStore.getAllInsurances);
    // Dispatch only for the first time to construct the state tree
    if (this.selectedTab === Tabs.Products) {
      this.store.dispatch(new fromStore.LoadInsurances());
    }

  }

  removeInsurance() {

    this.calculatePrice();
  }

  purchaseInsurance(isPriceCalculation?: boolean) {

    if (isPriceCalculation) {
      this.calculatePrice();
      return false;
    }
    const subscription = this.insurances$.subscribe((insurances) => {
      insurances.map((insurance) => {
        if (insurance.isInCart && !insurance.isBought) {
          const insuranceObj: Insurance = {...insurance};
          insuranceObj.isInCart = false;
          insuranceObj.isBought = true;
          this.store.dispatch(new fromStore.UpdateInsurance(insuranceObj));
          this.calculatePrice();
        }
      });
    });
    subscription.unsubscribe();
  }
  //  Refactor, use  @ViewChild for DOM ACCESS
  registerCartViewOnEnter() {
    const cartElement = document.querySelector('#cart');
    const that = this;
    if (cartElement) {
      cartElement.addEventListener('cartviewonenter', function (event) {
        event.stopImmediatePropagation();
        that.purchaseInsurance(true);
      }, true);
    }
  }

  calculatePrice() {
    let price = 0;
    const subscription = this.insurances$.subscribe((insurances) => {
      insurances.map((insurance) => {
        if (insurance.isInCart && !insurance.isBought) {
          const insuranceObj: Insurance = {...insurance};
          price += insuranceObj.price;
        }
      });
    });
    subscription.unsubscribe();
    const priceField = document.querySelector('#priceField');
    priceField.innerHTML = price + ',00';
  }


}
