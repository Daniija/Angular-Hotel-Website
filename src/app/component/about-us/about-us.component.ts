import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  services = [
    {
      title: '25/7 Front Desk',
      description:'A small river named Duden flows by their place and supplies.',
      img:'assets/bell.png'
    },
    {
      title: 'Restaurant Bar',
      description:'A small river named Duden flows by their place and supplies.',
      img:'assets/food-serving.png'
    },
    {
      title: 'Transfer',
      description:'A small river named Duden flows by their place and supplies.',
      img:'assets/car.png'
    },
    {
      title: 'Spa Suites',
      description:'A small river named Duden flows by their place and supplies.',
      img:'assets/spa.png'
    },
  ];

  teams = [
    {
      name: 'Kimberly Stewart',
      title:'Founder & CEO',
      description: 'Our web design team will spend time with our digital marketing team.',
      img:'assets/team1.jpg'
    },
    {
      name: 'Peter Griffen',
      title:'HR Manager',
      description: 'Our web design team will spend time with our digital marketing team.',
      img:'assets/team2.jpg'
    },
    {
      name: 'Moya Nelson',
      title:'Head Receptionist',
      description: 'Our web design team will spend time with our digital marketing team.',
      img:'assets/team3.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
