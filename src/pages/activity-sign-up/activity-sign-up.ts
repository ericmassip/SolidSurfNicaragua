import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ActivitiesManagerProvider } from "../../providers/activities-manager/activities-manager";

@IonicPage({})
@Component({
  selector: 'page-activity-sign-up',
  templateUrl: 'activity-sign-up.html',
})
export class ActivitySignUpPage {

  couples: boolean = true;
  family: boolean = true;
  friends: boolean = true;
  chill: boolean = true;
  active: boolean = true;
  sortingType: string;

  constructor(private activitiesManager: ActivitiesManagerProvider, private navCtrl: NavController) {}

  navigateTo(pageName: string) {
    this.navCtrl.push(pageName);
  }

  updateActivities() {
    this.activitiesManager.sortActivities(this.getSelectedCategories(), this.sortingType);
  }

  getSelectedCategories() {
    var selectedCategories = [];
    if (this.couples === true) {
      selectedCategories.push('Couples');
    }
    if (this.family === true) {
      selectedCategories.push('Family');
    }
    if (this.friends === true) {
      selectedCategories.push('Friends');
    }
    if (this.chill === true) {
      selectedCategories.push('Chill');
    }
    if (this.active === true) {
      selectedCategories.push('Active');
    }
    return selectedCategories;
  }

}