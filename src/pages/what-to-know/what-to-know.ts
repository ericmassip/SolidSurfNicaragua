import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-what-to-know',
  templateUrl: 'what-to-know.html',
})
export class WhatToKnowPage {

  constructor(private navCtrl: NavController) {
    
  }

  navigateTo(pageName: string) {
    this.navCtrl.push(pageName);
  }

}
