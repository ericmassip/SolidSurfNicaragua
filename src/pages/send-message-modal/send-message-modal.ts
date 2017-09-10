import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';
import { ContactMessage } from "../../models/contactMessage/contactMessage.interface";
import { EmailService } from "../../providers/email-service/email-service";

@IonicPage({})
@Component({
  selector: 'page-send-message-modal',
  templateUrl: 'send-message-modal.html',
})
export class SendMessageModalPage {

  constructor(private emailService: EmailService, private view: ViewController) {
  }

  closeModalSendMessage() {
    this.view.dismiss();
  }

  sendMessage(contactMessage: ContactMessage) {
    this.emailService.sendContactEmail(contactMessage);
  }
}
