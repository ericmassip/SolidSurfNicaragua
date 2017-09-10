import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@IonicPage({})
@Component({
  selector: 'page-volunteer',
  templateUrl: 'volunteer.html',
})
export class VolunteerPage {

  videos: any[] = [
    {
      video: 'https://www.youtube.com/embed/cMDrv9EdbvQ'
    }
  ]

  constructor(private inAppBrowser: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {
  }

  openWebpage(url: string) {
    const browser = this.inAppBrowser.create(url, '_self');
    browser.show();
  }

}
