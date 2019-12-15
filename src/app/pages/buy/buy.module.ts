import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BuyPage } from './buy';
import { BuyPageRoutingModule } from './buy-routing.module';

import {ProductsModule} from '../../../products/products.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuyPageRoutingModule,
    ProductsModule
  ],
  declarations: [
    BuyPage,

  ],
  entryComponents: [

  ]
})
export class BuyModule {

}
