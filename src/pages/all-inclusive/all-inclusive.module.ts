import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AllInclusivePage } from './all-inclusive';
import { AllInclusiveDetailsModule } from "../../components/all-inclusive-details/all-inclusive-details.component.module";
import { AllInclusiveMyStuffModule } from "../../components/all-inclusive-my-stuff/all-inclusive-my-stuff.component.module";

@NgModule({
    imports: [
        IonicPageModule.forChild(AllInclusivePage),
        AllInclusiveDetailsModule,
        AllInclusiveMyStuffModule
    ],
    declarations: [AllInclusivePage]
})
export class AllInclusiveModule {}