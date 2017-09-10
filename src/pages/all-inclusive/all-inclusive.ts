import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

@IonicPage({})
@Component({
  selector: 'page-all-inclusive',
  templateUrl: 'all-inclusive.html',
})
export class AllInclusivePage {

  selectedTab: string = "Details";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  changeTab (tabName: string) {
    if (tabName != this.selectedTab) {
      this.selectedTab = tabName;
    }
  }

}
