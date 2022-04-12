import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms = [
    {
      title: 'Suite Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$120.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
    {
      title: 'Family Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$20.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
    {
      title: 'Deluxe Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$150.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
    {
      title: 'Classic Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$130.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
    {
      title: 'Superior Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$300.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
    {
      title: 'Luxury Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$500.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
    {
      title: 'Classic Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$130.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
    {
      title: 'Classic Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$130.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
    {
      title: 'Classic Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$130.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
    {
      title: 'Classic Room',
      description:'A small river named Duden flows by their place and supplies.',
      price: '$130.00',
      persons: '3',
      view: 'Sea View',
      beds: '2',
      img:'assets/o1.jpg'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
