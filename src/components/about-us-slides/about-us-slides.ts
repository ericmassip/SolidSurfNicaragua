import { Component } from '@angular/core';

@Component({
  selector: 'about-us-slides',
  templateUrl: 'about-us-slides.html'
})
export class AboutUsSlidesComponent {

  ImageArray: any = [];

  constructor() {
    this.ImageArray = [
      {'image':'assets/img/about-us/slides/1.jpg'},
      {'image':'assets/img/about-us/slides/2.png'},
      {'image':'assets/img/about-us/slides/3.png'},
      {'image':'assets/img/about-us/slides/4.png'},
      {'image':'assets/img/about-us/slides/5.png'},
      {'image':'assets/img/about-us/slides/6.png'},
      {'image':'assets/img/about-us/slides/7.png'},
      {'image':'assets/img/about-us/slides/8.png'},
      {'image':'assets/img/about-us/slides/9.png'},
      {'image':'assets/img/about-us/slides/10.jpg'}
    ]
  }

}
