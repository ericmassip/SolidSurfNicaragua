import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AllInclusiveMyStuffComponent } from './all-inclusive-my-stuff.component';

@NgModule({
    declarations: [
        AllInclusiveMyStuffComponent
    ],
    imports:[
        IonicModule
    ],
    exports:[
        AllInclusiveMyStuffComponent
    ]
})
export class AllInclusiveMyStuffModule {}