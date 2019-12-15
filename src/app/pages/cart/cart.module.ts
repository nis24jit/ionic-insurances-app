import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CartPage } from './cart';
import { CartPageRoutingModule } from './cart-routing.module';
import {ProductsModule} from '../../../products/products.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CartPageRoutingModule,
    ProductsModule

  ],
  declarations: [
    CartPage,
  ]
})
export class CartModule { }
