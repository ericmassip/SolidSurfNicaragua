import { Component } from '@angular/core';
import { NavController } from "ionic-angular";


@Component({
  selector: 'all-inclusive-details-component',
  templateUrl: 'all-inclusive-details.component.html'
})
export class AllInclusiveDetailsComponent {

  constructor(private navCtrl: NavController) {}

  navigateTo(pageName: string) {
    this.navCtrl.push(pageName);
  }

}
