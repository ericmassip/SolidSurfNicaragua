import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { MyActivityListPage } from './my-activity-list';
import { MyActivityListSelectedLocalActivitiesComponentModule } from "../../components/my-activity-list-selected-local-activities/my-activity-list-selected-local-activities.component.module";
import { MyActivityListSelectedTourActivitiesComponentModule } from "../../components/my-activity-list-selected-tour-activities/my-activity-list-selected-tour-activities.component.module";

@NgModule({
    imports: [
        IonicPageModule.forChild(MyActivityListPage),
        MyActivityListSelectedTourActivitiesComponentModule,
        MyActivityListSelectedLocalActivitiesComponentModule
    ],
    declarations: [MyActivityListPage],
    exports:[MyActivityListPage]
})

export class MyActivityListModule {}