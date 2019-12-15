import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProductsPage } from './products';
import { ProductsPageRoutingModule } from './products-routing.module';

import {ProductsModule} from '../../../products/products.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsPageRoutingModule,
    ProductsModule
  ],
  declarations: [ProductsPage],
  bootstrap: [ProductsPage],
})
export class ProductsPageModule {

}
