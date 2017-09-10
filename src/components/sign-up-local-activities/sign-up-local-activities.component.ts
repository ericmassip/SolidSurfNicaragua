import { Component } from '@angular/core';
import { Activity } from "../../models/activity/activity.interface";
import { ActivitiesManagerProvider } from "../../providers/activities-manager/activities-manager";

@Component({
  selector: 'sign-up-local-activities-component',
  templateUrl: 'sign-up-local-activities.component.html'
})
export class SignUpLocalActivitiesComponent {

  localActivities: Activity[] = this.activitiesManager.localActivities;
  
  constructor(private activitiesManager: ActivitiesManagerProvider) {}

  selectDeselectActivity(activity: Activity) {
    if (activity.isSelected) {
      this.activitiesManager.removeLocalActivity(activity);
    } else {
      this.activitiesManager.addLocalActivity(activity);
    }
  }

}