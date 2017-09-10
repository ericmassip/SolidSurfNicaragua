import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyActivityListSelectedLocalActivitiesComponent } from './my-activity-list-selected-local-activities.component';

@NgModule({
    declarations: [
        MyActivityListSelectedLocalActivitiesComponent
    ],
    imports:[
        IonicModule
    ],
    exports:[
        MyActivityListSelectedLocalActivitiesComponent
    ]
})
export class MyActivityListSelectedLocalActivitiesComponentModule {}