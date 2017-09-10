import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SendMessageComponent } from './send-message';

@NgModule({
    declarations: [
        SendMessageComponent
    ],
    imports:[
        IonicModule
    ],
    exports:[
        SendMessageComponent
    ]
})
export class SendMessageComponentModule {}