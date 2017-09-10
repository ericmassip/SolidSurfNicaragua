import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TheTownDiscoverComponent } from './the-town-discover';

@NgModule({
    declarations: [
        TheTownDiscoverComponent
    ],
    imports:[
        IonicModule
    ],
    exports:[
        TheTownDiscoverComponent
    ]
})
export class TheTownDiscoverModule {}