import { Component, OnInit } from '@angular/core';
import { Instructor } from './model/instructor.model';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss']
})
export class InstructorComponent implements OnInit {

  instructors: Instructor[] = [];

  getInstructor(): void {
    const instr: Instructor[] = [
      {
        name: "Ginanjar",
        img: "http://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus.",
        socialMedia: [
          {
            icon: "bi bi-twitter",
            ref: ""
          },
          {
            icon: "bi bi-facebook",
            ref: ""
          },
          {
            icon: "bi bi-linkedin",
            ref: ""
          },
          {
            icon: "bi bi-instagram",
            ref: ""
          },
        ]
      },
      {
        name: "Faris",
        img: "https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus.",
        socialMedia: [
          {
            icon: "bi bi-twitter",
            ref: ""
          },
          {
            icon: "bi bi-facebook",
            ref: ""
          },
          {
            icon: "bi bi-linkedin",
            ref: ""
          },
          {
            icon: "bi bi-instagram",
            ref: ""
          },
        ]
      },
      {
        name: "Suci",
        img: "https://dl.memuplay.com/new_market/img/com.vicman.newprofilepic.icon.2022-06-07-21-33-07.png",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus.",
        socialMedia: [
          {
            icon: "bi bi-twitter",
            ref: ""
          },
          {
            icon: "bi bi-facebook",
            ref: ""
          },
          {
            icon: "bi bi-linkedin",
            ref: ""
          },
          {
            icon: "bi bi-instagram",
            ref: ""
          },
        ]
      },
      {
        name: "Dimas",
        img: "https://img.freepik.com/premium-vector/pretty-hijab-woman-side-profile-with-colorful-flower-bouquet_185694-1105.jpg?w=2000",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus.",
        socialMedia: [
          {
            icon: "bi bi-twitter",
            ref: ""
          },
          {
            icon: "bi bi-facebook",
            ref: ""
          },
          {
            icon: "bi bi-linkedin",
            ref: ""
          },
          {
            icon: "bi bi-instagram",
            ref: ""
          },
        ]
      },
    ];

    this.instructors = instr;
  }

  constructor() { }

  ngOnInit(): void {
    this.getInstructor();
  }

}
