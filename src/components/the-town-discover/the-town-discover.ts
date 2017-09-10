import { Component } from '@angular/core';

@Component({
  selector: 'the-town-discover',
  templateUrl: 'the-town-discover.html'
})
export class TheTownDiscoverComponent {

  restaurants = [
    {
      image: "assets/img/the-town/restaurants/OlasClandestinas.jpg",
      title: "Olas Clandestinas",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Great beachfront bar - Try the fish and chips or fruit cup cocktail."
    },
    {
      image: "assets/img/the-town/restaurants/Caracola.jpg",
      title: "Caracola Cafe",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Thick Smoothies, Iced Coffee and Fresh ice pops with breakfast and lunch options."
    },
    {
      image: "assets/img/the-town/restaurants/FreeSpiritBar.jpg",
      title: "Free Spirit Bar",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "The party bar in town - shots shots shots! Hungover? Try a morning Caesar (Canadian version of a blood Mary)!"
    },
    {
      image: "assets/img/the-town/restaurants/Veronicas.jpg",
      title: "Buen Gusto",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "True local food. Try the fried full snapper or check out a Saturday Night party!"
    },
    {
      image: "assets/img/the-town/restaurants/Pozas.png",
      title: "Pozas",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Great for tacos, quesadillas and Pizza Night(Wed/Sat)!"
    }
  ]

  activities = [
    {
      image: "assets/img/the-town/activities/TidePools.jpg",
      title: "Tide Pools",
      titleColor: "black", //Leave empty for white, say black for black color
      subtitle: "Walk down the beach left or right to find numerous tide pools great for swimming. Be careful of the rocks!"
    },
    {
      image: "assets/img/the-town/activities/FishMarket.jpg",
      title: "Fresh Catch",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Wake up early to check out the fisherman and their catch. They may even give you a fish!"
    },
    {
      image: "assets/img/the-town/activities/Baseball.jpg",
      title: "Baseball Games",
      titleColor: "black", //Leave empty for white, say black for black color
      subtitle: "Sunday baseball games, sometimes double headers starting around 9am. Season runs November - May."
    },
    {
      image: "assets/img/the-town/activities/ArtCenter.jpg",
      title: "Play with Kids at ETCA",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "The art center/library is open after school from 2:30pm - 5pm with kids to entertain you for hours. Color, paint, play soccer or play a game."
    },
    {
      image: "assets/img/the-town/activities/PoolWithLocals.jpg",
      title: "Billards with the locals",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "There are a few places in town to play a good game of pool and what a great way to get to know the local scene."
    },
    {
      image: "assets/img/the-town/activities/BeachSoccer.jpg",
      title: "Beach Soccer",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Grab a bunch of friends and tell some locals and in no time you’ll have a beach soccer game going."
    },
    {
      image: "assets/img/the-town/activities/NightFishing.jpg",
      title: "Overnight Fishing",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Experience what it's like to be a local fisherman and ask them to take you along (there is usually a fee as they don’t keep you out there all night!)"
    },
    {
      image: "assets/img/the-town/activities/SlackLine.jpg",
      title: "Slack-Line",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Test your balance on the slack line. Or use it to play soccer volleyball."
    },
    {
      image: "assets/img/the-town/activities/Volunteer.jpg",
      title: "Volunteer",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Participate in any of the numerous volunteer activities we have going on. An easy way to quickly get to know the locals."
    },
    {
      image: "assets/img/the-town/activities/Bocci.jpg",
      title: "Coco Bocci",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Round up some coconuts and play some Coco Bocci ball!"
    }
  ]

  shops = [
    {
      image: "assets/img/the-town/shops/ArtCenter2.png",
      title: "ETCA",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "The women’s co-op make amazing items like reversible bags, scarves, headbands and keychains. Great souvenirs!"
    },
    {
      image: "assets/img/the-town/shops/Caracola_2.jpg",
      title: "Caracola Cafe",
      titleColor: "", //Leave empty for white, say black for black color
      subtitle: "Grab a local t-shirt, bracelet or art project made from any one of the amazing locals in town."
    },
    {
      image: "assets/img/the-town/shops/ComingSoon.png",
      title: "SOLID Shop",
      titleColor: "black", //Leave empty for white, say black for black color
      subtitle: "Pick up some Coconut oil, all natural soap, a SOLID Surf Tank, Wax, cocoa butter or rash guard (coming soon!)"
    }
  ]

  constructor() {}

}