import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  exclusives = [
    {
      title: 'Deluxe Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$100,000',
      img:'assets/o1.jpg'
    },
    {
      title: 'Single Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$95,000',
      img:'assets/o2.jpg'
    },
    {
      title: 'King Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$250,000',
      img:'assets/o3.jpg'
    },
    {
      title: 'Double Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$120,000',
      img:'assets/o4.jpg'
    },
  ];

  activities = [
    {
      title: 'Swimming pool',
      description:'A small river named Duden flows by their place and supplies.',
      age: '5+ years',
      duration:'2 Hours'
    },
    {
      title: 'Billiard Room',
      description:'A small river named Duden flows by their place and supplies.',
      age: '18+ years',
      duration:'5 Hours'
    },
    {
      title: 'Day Care',
      description:'A small river named Duden flows by their place and supplies.',
      age: '1-3 years',
      duration:'24 hrs'
    },
  ];
  
  blogs = [
    {
      banner: 'Camping',
      title: 'Why do you like camping?',
      description:'A small river named Duden flows by their place and supplies.',
      person: 'admin',
      comments: '20 Comments',
      img:'assets/b1.jpg'
    },
    {
      banner: 'Hotel',
      title: 'Celebrating Decade Years Of Hotel In 2020',
      description:'A small river named Duden flows by their place and supplies.',
      person: 'Jason',
      comments: '50 Comments',
      img:'assets/b2.jpg'
    },
    {
      banner: 'Hotel',
      title: 'A milestone reached',
      description:'A small river named Duden flows by their place and supplies.',
      person: 'Bob',
      comments: '120 Comments',
      img:'assets/b3.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
