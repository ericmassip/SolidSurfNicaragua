import { Component } from '@angular/core';
import { Activity } from "../../models/activity/activity.interface";
import { ActivitiesManagerProvider } from "../../providers/activities-manager/activities-manager";


@Component({
  selector: 'sign-up-tour-activities-component',
  templateUrl: 'sign-up-tour-activities.component.html'
})
export class SignUpTourActivitiesComponent {

  tourActivities: Activity[] = this.activitiesManager.tourActivities;

  constructor(private activitiesManager: ActivitiesManagerProvider) {}

  selectDeselectActivity(activity: Activity) {
    if (activity.isSelected) {
      this.activitiesManager.removeTourActivity(activity);
    } else {
      this.activitiesManager.addTourActivity(activity);
    }
  }

}
