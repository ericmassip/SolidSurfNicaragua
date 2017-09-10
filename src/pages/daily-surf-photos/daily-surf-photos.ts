import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@IonicPage({})
@Component({
  selector: 'page-daily-surf-photos',
  templateUrl: 'daily-surf-photos.html',
})
export class DailySurfPhotosPage {

  constructor(private inAppBrowser: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {}

  openWebpage(url: string) {
    const browser = this.inAppBrowser.create(url, '_self');
    browser.show();
  }

}