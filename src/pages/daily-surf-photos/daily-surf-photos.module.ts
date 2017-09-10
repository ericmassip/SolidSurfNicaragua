import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { DailySurfPhotosPage } from './daily-surf-photos';

@NgModule({
    imports: [
        IonicPageModule.forChild(DailySurfPhotosPage)
    ],
    declarations: [DailySurfPhotosPage]
})
export class DailySurfPhotosModule {}