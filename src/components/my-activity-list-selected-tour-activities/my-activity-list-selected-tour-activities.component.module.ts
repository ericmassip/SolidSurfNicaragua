import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MyActivityListSelectedTourActivitiesComponent } from './my-activity-list-selected-tour-activities.component';

@NgModule({
    declarations: [
        MyActivityListSelectedTourActivitiesComponent
    ],
    imports:[
        IonicModule
    ],
    exports:[
        MyActivityListSelectedTourActivitiesComponent
    ]
})
export class MyActivityListSelectedTourActivitiesComponentModule {}