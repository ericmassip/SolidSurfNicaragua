import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutUsPage } from './about-us';
import { AboutUsSlidesModule } from "../../components/about-us-slides/about-us-slides.module";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
    imports: [
        IonicPageModule.forChild(AboutUsPage),
        AboutUsSlidesModule,
        PipesModule
    ],
    declarations: [AboutUsPage]
})

export class AboutUsModule {}