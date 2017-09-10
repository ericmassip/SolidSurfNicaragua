import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';
import { EmailService } from "../../providers/email-service/email-service";

@IonicPage({})
@Component({
  selector: 'page-my-activity-list',
  templateUrl: 'my-activity-list.html',
})
export class MyActivityListPage {

  constructor(private alertCtrl: AlertController, private emailService: EmailService, private navCtrl: NavController) {
  }

  navigateTo(pageName: string) {
    this.navCtrl.push(pageName);
  }

  sendSignedUpActivities() {
    let alert = this.alertCtrl.create({
      title: 'Insert Name',
      message: 'Please write your name below',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Insert',
          handler: data => {
            this.emailService.sendEmailWithSignedUpActivities({
              name: data.name
            });
          }
        }
      ]
    });
    alert.present();
  }

}
