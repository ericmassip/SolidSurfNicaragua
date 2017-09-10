import { Component, Output, EventEmitter } from '@angular/core';
import { ContactMessage } from '../../models/contactMessage/contactMessage.interface';
import { NavController } from "ionic-angular";

@Component({
  selector: 'send-message-component',
  templateUrl: 'send-message.html'
})
export class SendMessageComponent {

  contactMessage = {} as ContactMessage;

  @Output() sendMessage: EventEmitter<ContactMessage>;

  constructor(private navCtrl: NavController) {
    this.sendMessage = new EventEmitter<ContactMessage>();
  }

  sendContactMessage() {
    this.sendMessage.emit(this.contactMessage);
    this.navCtrl.push('HomePage');
  }

}