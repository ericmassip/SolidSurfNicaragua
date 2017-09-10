import { Component } from '@angular/core';
import { ActivitiesManagerProvider } from "../../providers/activities-manager/activities-manager";
import { Activity } from "../../models/activity/activity.interface";


@Component({
  selector: 'my-activity-list-selected-local-activities-component',
  templateUrl: 'my-activity-list-selected-local-activities.component.html'
})
export class MyActivityListSelectedLocalActivitiesComponent {

  selectedLocalActivities: Activity[] = this.activitiesManager.selectedLocalActivities;

  constructor(private activitiesManager: ActivitiesManagerProvider) {}

}
