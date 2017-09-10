import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TheTownPage } from './the-town';
import { TheTownInfoModule } from "../../components/the-town-info/the-town-info.module";
import { TheTownDiscoverModule } from "../../components/the-town-discover/the-town-discover.module";

@NgModule({
    imports: [
        IonicPageModule.forChild(TheTownPage),
        TheTownDiscoverModule,
        TheTownInfoModule
    ],
    declarations: [TheTownPage]
})

export class TheTownModule {}