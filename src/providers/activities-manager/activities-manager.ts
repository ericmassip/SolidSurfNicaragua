import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Activity } from "../../models/activity/activity.interface";
import { TOUR_ACTIVITIES, LOCAL_ACTIVITIES } from "../../mocks/activities/activities";


@Injectable()
export class ActivitiesManagerProvider {

  tourActivities: Activity[] = TOUR_ACTIVITIES;
  selectedTourActivities: Activity[] = [];
  localActivities: Activity[] = LOCAL_ACTIVITIES;
  selectedLocalActivities: Activity[] = [];

  constructor() {}

  public addTourActivity(activity: Activity) {
    this.addActivity(this.selectedTourActivities, activity);
  }

  public removeTourActivity(activity: Activity) {
    this.removeActivity(this.selectedTourActivities, activity);
  }

  public addLocalActivity(activity: Activity) {
    this.addActivity(this.selectedLocalActivities, activity);
  }

  public removeLocalActivity(activity: Activity) {
    this.removeActivity(this.selectedLocalActivities, activity);
  }

  private addActivity(activities: Activity[], activity: Activity) {
    activities.push(activity);
    activity.isSelected = true;
  }

  private removeActivity(activities: Activity[], activity: Activity) {
    activities.splice(activities.indexOf(activity), 1);
    activity.isSelected = false;
  }

  public sortActivities(selectedCategories: string[], sortingType: string) {
    this.setIsHiddenToFilteredActivities(this.tourActivities, selectedCategories);
    this.setIsHiddenToFilteredActivities(this.localActivities, selectedCategories);
    this.sortActivitiesBy(this.tourActivities, sortingType);
    this.sortActivitiesBy(this.localActivities, sortingType);
  }

  private setIsHiddenToFilteredActivities(activitiesToFilter: Activity[], selectedCategories: string[]) {
    activitiesToFilter.forEach(activity => {
      var found = false;
      var categories = activity.orderInfo.categories;
      for (var i = 0; i < categories.length && found === false; i++) {
        for (var j = 0; j < selectedCategories.length && found === false; j++) {
          if (selectedCategories[j] === categories[i]) {
            found = true;
            activity.isHidden = false;
          }
        }
      }
      if (found === false) {
        activity.isHidden = true;
      }
    });
  }

  private sortActivitiesBy(activitiesToSort: Activity[], sortingType: string) {
    activitiesToSort.sort(function (a, b) {
      switch(sortingType){
        case 'distance':
          return (a.orderInfo.distance > b.orderInfo.distance) ? 1 : -1;
        case 'tourLength':
          return (a.orderInfo.tourLength > b.orderInfo.tourLength) ? 1 : -1;
        case 'pmDeparture':
          return (a.orderInfo.pmDeparture > b.orderInfo.pmDeparture) ? 1 : -1;
        case 'energyLevel':
          return (a.orderInfo.energyLevel > b.orderInfo.energyLevel) ? 1 : -1;
      }
    });
  }

  public generateHTMLBodyWithSelectedActivities() {
    var generatedHTMLBodyWithSelectedActivities = "";

    generatedHTMLBodyWithSelectedActivities += 'TOUR ACTIVITIES<br>';
    this.selectedTourActivities.forEach(activity => {
      generatedHTMLBodyWithSelectedActivities += `${activity.showInfo.title}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Distance: ${activity.showInfo.distance}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Tour Length: ${activity.showInfo.tourLength}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Leave: ${activity.showInfo.pmDeparture}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Energy Level: ${activity.showInfo.energyLevel}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Categories: ${activity.showInfo.categories}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Preferred Day: ${activity.preferredDay}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Number Of People: ${activity.numberOfPeople}<br><br>`;
    });

    generatedHTMLBodyWithSelectedActivities += 'LOCAL ACTIVITIES<br>';
    this.selectedLocalActivities.forEach(activity => {
      generatedHTMLBodyWithSelectedActivities += `${activity.showInfo.title}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Length: ${activity.showInfo.tourLength}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Time: ${activity.showInfo.pmDeparture}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Energy Level: ${activity.showInfo.energyLevel}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Categories: ${activity.showInfo.categories}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Number Of Times: ${activity.numberOfTimes}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Number Of People: ${activity.numberOfPeople}<br>`;
      generatedHTMLBodyWithSelectedActivities += ` - Note: ${activity.note}<br><br>`;
    });

    return generatedHTMLBodyWithSelectedActivities;
  }

}
