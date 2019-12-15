import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { ProductsPage } from '../products/products';

// Lazy load the products, cart and buy modules
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'products',
        children: [
          {
            path: '',
            component: ProductsPage,
          }
        ]
      },
      {
        path: 'buy',
        children: [
          {
            path: '',
            loadChildren: () => import('../buy/buy.module').then(m => m.BuyModule)
          }

        ]
      },
      {
        path: 'cart',
        children: [
          {
            path: '',
            loadChildren: () => import('../cart/cart.module').then(m => m.CartModule)
          }
        ]
      },

      {
        path: '',
        redirectTo: '/app/tabs/products',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

