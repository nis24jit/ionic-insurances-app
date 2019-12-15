import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';


import {reducers, effects} from './store';


// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.ProductsComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)

  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers],
  exports: [...fromContainers.containers],
})
export class ProductsModule {
}
