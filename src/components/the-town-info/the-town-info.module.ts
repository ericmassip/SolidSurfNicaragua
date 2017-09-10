import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TheTownInfoComponent } from './the-town-info';

@NgModule({
    declarations: [
        TheTownInfoComponent
    ],
    imports:[
        IonicModule
    ],
    exports:[
        TheTownInfoComponent
    ]
})
export class TheTownInfoModule {}