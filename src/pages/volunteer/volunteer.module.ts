import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesModule } from "../../pipes/pipes.module";
import { VolunteerPage } from './volunteer';

@NgModule({
    imports: [
        IonicPageModule.forChild(VolunteerPage),
        PipesModule
    ],
    declarations: [VolunteerPage]
})

export class VolunteerModule {}