import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ActivitySignUpPage } from './activity-sign-up';
import { SignUpTourActivitiesComponentModule } from "../../components/sign-up-tour-activities/sign-up-tour-activities.component.module";
import { SignUpLocalActivitiesComponentModule } from "../../components/sign-up-local-activities/sign-up-local-activities.component.module";

@NgModule({
    imports: [
        IonicPageModule.forChild(ActivitySignUpPage),
        SignUpTourActivitiesComponentModule,
        SignUpLocalActivitiesComponentModule
    ],
    declarations: [ActivitySignUpPage]
})
export class ActivitySignUpModule {}