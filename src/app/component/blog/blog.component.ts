import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs = [
    {
      img: 'assets/hotel.jpg',
      tag: 'Health',
      title:'Did covid almost shut down the hotel industry?',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?',
      user: 'Jerome Walton',
      time: '2 hours ago'
    },
    {
      img: 'assets/hotel.jpg',
      tag: 'Personal',
      title:'What does a typical day in your life look like?',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?',
      user: 'Jerome Walton',
      time: '2 hours ago'
    },
    {
      img: 'assets/hotel.jpg',
      tag: 'Fitness',
      title:'Talk about your fitness routine.',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?',
      user: 'Jerome Walton',
      time: '2 hours ago'
    },
    {
      img: 'assets/hotel.jpg',
      tag: 'Personal',
      title:'Write about your recent travel experience.',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?',
      user: 'Jerome Walton',
      time: '2 hours ago'
    },
    {
      img: 'assets/hotel.jpg',
      tag: 'Personal',
      title:'What are some points to consider before you plan a vacation?',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?',
      user: 'Jerome Walton',
      time: '2 hours ago'
    },
    {
      img: 'assets/hotel.jpg',
      tag: 'Technology',
      title:'Write about the perks of blogging.',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?',
      user: 'Jerome Walton',
      time: '2 hours ago'
    },
    {
      img: 'assets/hotel.jpg',
      tag: 'Fun',
      title:'What’s your favorite hideout or hangout spot?',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?',
      user: 'Jerome Walton',
      time: '2 hours ago'
    },
    {
      img: 'assets/hotel.jpg',
      tag: 'Home',
      title:'Talk about how you decorated your home.',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?',
      user: 'Jerome Walton',
      time: '2 hours ago'
    },
    {
      img: 'assets/hotel.jpg',
      tag: 'Personal',
      title:'Promote a cause that you’re passionate about.',
      info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur tenetur distinctio neque?',
      user: 'Jerome Walton',
      time: '2 hours ago'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
