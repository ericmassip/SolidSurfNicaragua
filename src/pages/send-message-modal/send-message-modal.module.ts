import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SendMessageModalPage } from './send-message-modal';
import { SendMessageComponentModule } from '../../components/send-message/send-message.module';

@NgModule({
    imports: [
        IonicPageModule.forChild(SendMessageModalPage),
        SendMessageComponentModule
    ],
    declarations: [SendMessageModalPage],
    exports:[SendMessageModalPage]
})

export class SendMessageModalModule {}