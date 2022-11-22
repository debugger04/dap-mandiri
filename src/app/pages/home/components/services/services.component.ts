import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services = [
    {
      icon: "bi bi-laptop",
      title: "Virtual",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus. Suspendisse semper, mi id commodo tristique, justo purus ultricies sem, vitae pulvinar tellus est ut nunc. Aliquam rhoncus nibh sit amet mi euismod lobortis.",
      bg: "bg-dark",
      type: "text-light"
    },
    {
      icon: "bi bi-person-square",
      title: "Hybrid",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus. Suspendisse semper, mi id commodo tristique, justo purus ultricies sem, vitae pulvinar tellus est ut nunc. Aliquam rhoncus nibh sit amet mi euismod lobortis.",
      bg: "bg-light",
      type: "text-dark"
    },
    {
      icon: "bi bi-person",
      title: "In Person",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus. Suspendisse semper, mi id commodo tristique, justo purus ultricies sem, vitae pulvinar tellus est ut nunc. Aliquam rhoncus nibh sit amet mi euismod lobortis.",
      bg: "bg-dark",
      type: "text-light"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
