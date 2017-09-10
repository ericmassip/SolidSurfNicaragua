import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { EmailComposer } from '@ionic-native/email-composer';
import { ContactMessage } from "../../models/contactMessage/contactMessage.interface";
import { ActivitiesManagerProvider } from "../activities-manager/activities-manager";


@Injectable()
export class EmailService {

  solidEmail = "info@solidsurfadventure.com";

  constructor(private activitiesManager: ActivitiesManagerProvider, private emailComposer: EmailComposer) {
  }

  public sendContactEmail(contactMessage: ContactMessage) {
    let email = {
      to: this.solidEmail,
      subject: `Contact SOLID ${contactMessage.name}`,
      body: this.generateHTMLBodyWithContactMessage(contactMessage),
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  private generateHTMLBodyWithContactMessage(contactMessage: ContactMessage) {
    var generatedHTMLBodyWithContactMessage = "";
    generatedHTMLBodyWithContactMessage += `Number Of People: ${contactMessage.numberOfPeople}<br>`;
    generatedHTMLBodyWithContactMessage += `Accomodation Type: ${contactMessage.accomodationType}<br>`;
    generatedHTMLBodyWithContactMessage += `Surf Experience: ${contactMessage.surfExperience}<br>`;
    generatedHTMLBodyWithContactMessage += `Message: ${contactMessage.message}`;
    return generatedHTMLBodyWithContactMessage;
  }

  public sendEmailWithWaiver(contactMessage: ContactMessage) {
    let email = {
      to: contactMessage.emailAddress,
      subject: `Waiver SOLID`,
      attachments: [
        'file://assets/AGREEMENT-FOR-WAIVER-SOLID_2017.pdf'
      ],
      isHtml: true
    };
    this.emailComposer.open(email);
  }

  public sendEmailWithSignedUpActivities(contactMessage: ContactMessage) {
    let email = {
      to: this.solidEmail,
      subject: `Activities Sign Up for ${contactMessage.name}`,
      body: this.activitiesManager.generateHTMLBodyWithSelectedActivities(),
      isHtml: true
    };
    this.emailComposer.open(email);
  }

}
