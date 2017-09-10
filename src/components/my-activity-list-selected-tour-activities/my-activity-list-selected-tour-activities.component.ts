import { Component } from '@angular/core';
import { Activity } from "../../models/activity/activity.interface";
import { ActivitiesManagerProvider } from "../../providers/activities-manager/activities-manager";


@Component({
  selector: 'my-activity-list-selected-tour-activities-component',
  templateUrl: 'my-activity-list-selected-tour-activities.component.html'
})
export class MyActivityListSelectedTourActivitiesComponent {

  selectedTourActivities: Activity[] = this.activitiesManager.selectedTourActivities;

  constructor(private activitiesManager: ActivitiesManagerProvider) {}

}
