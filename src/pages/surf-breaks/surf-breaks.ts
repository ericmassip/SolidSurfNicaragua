import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@IonicPage({})
@Component({
  selector: 'page-surf-breaks',
  templateUrl: 'surf-breaks.html',
})
export class SurfBreaksPage {

  constructor(private inAppBrowser: InAppBrowser) {
  }

  openWebpage(url: string) {
    const browser = this.inAppBrowser.create(url, '_self');
    browser.show();
  }

}
