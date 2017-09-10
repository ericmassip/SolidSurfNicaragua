import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FunFactsPage } from './fun-facts';

@NgModule({
    imports: [IonicPageModule.forChild(FunFactsPage)],
    declarations: [FunFactsPage]
})
export class FunFactsModule {}