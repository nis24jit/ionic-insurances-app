import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { ProductsPageModule } from '../products/products.module';
import { BuyModule } from '../buy/buy.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  imports: [
    ProductsPageModule,
    CommonModule,
    IonicModule,
    BuyModule,
    CartModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
