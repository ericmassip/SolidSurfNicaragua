import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ActivitiesPage } from './activities';

@NgModule({
    imports: [
        IonicPageModule.forChild(ActivitiesPage)
    ],
    declarations: [ActivitiesPage]
})
export class ActivitiesModule {}