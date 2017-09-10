import { Component } from '@angular/core';
import { NavController, IonicPage, ModalController, Platform } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { StatusBar } from "@ionic-native/status-bar";

@IonicPage({})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private statusBar: StatusBar, private navCtrl: NavController, private inAppBrowser: InAppBrowser, private modal: ModalController, private platform: Platform) {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
    });
  }

  navigateTo(pageName: string) {
    this.navCtrl.push(pageName);
  }

  openWebpage(url: string) {
    const browser = this.inAppBrowser.create(url, '_self');
    browser.show();
  }

  openModalSendMessage() {
    const sendMessageModal = this.modal.create('SendMessageModalPage');
    sendMessageModal.present();
  }

}