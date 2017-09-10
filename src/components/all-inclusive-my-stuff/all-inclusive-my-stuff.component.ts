import { Component } from '@angular/core';
import { NavController, AlertController } from "ionic-angular";
import { EmailService } from "../../providers/email-service/email-service";
import { InAppBrowser } from "@ionic-native/in-app-browser";

@Component({
  selector: 'all-inclusive-my-stuff-component',
  templateUrl: 'all-inclusive-my-stuff.component.html'
})
export class AllInclusiveMyStuffComponent {

  constructor(private inAppBrowser: InAppBrowser, private emailService: EmailService, private alertCtrl: AlertController, private navCtrl: NavController) {}

  navigateTo(pageName: string) {
    this.navCtrl.push(pageName);
  }

  sendWaiver() {
    this.alertCtrl.create({
      title: 'Insert Receiver E-mail Address',
      subTitle: 'Please insert the receiver e-mail address to get an e-mail with the waiver attached',
      inputs: [{
        name: 'emailAddress',
        placeholder: 'E-mail Address',
        type: 'email'
      }],
      buttons: [
        {
          text: 'Insert',
          handler: data => {
            this.emailService.sendEmailWithWaiver({
              emailAddress: data.emailAddress
            });
          }
        }
      ]
    }).present();
  }

  openWebpage(url: string) {
    const browser = this.inAppBrowser.create(url, '_self');
    browser.show();
  }

}