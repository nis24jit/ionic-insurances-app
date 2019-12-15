import { Component,  ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

// Menu controller class
export class AppComponent  {
  appPages = [
    {
      title: 'Products',
      url: '/app/tabs/products',
      icon: 'cube'
    },
    {
      title: 'Buy',
      url: '/app/tabs/buy',
      icon: 'card'
    },
    {
      title: 'Cart',
      url: '/app/tabs/cart',
      icon: 'cart'
    },

  ];

  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private statusBar: StatusBar,

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();

    });
  }








}
