import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Lazy load the tabs module
export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/app/tabs/products',
    pathMatch: 'full'
  },

  {
    path: 'app',
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
