import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';


@IonicPage({})
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUsPage {

  videos: any[] = [
    {
      video: 'https://www.youtube.com/embed/vASiH9DTo-0'
    }
  ]

  constructor() {
  }

}
