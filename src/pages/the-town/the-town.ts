import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';

declare var google;

@IonicPage({})
@Component({
  selector: 'page-the-town',
  templateUrl: 'the-town.html',
})
export class TheTownPage {

  selectedTab: string = "Discover";
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor() {}

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat: 12.0537651, lng: -86.7054803},
      disableDefaultUI: true
    });
  }

  changeTab (tabName: string) {
    if (tabName != this.selectedTab) {
      this.selectedTab = tabName;
    }
  }

}