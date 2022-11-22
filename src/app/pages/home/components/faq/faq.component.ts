import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faqs = [
    {
      question: "Where exactly are you located?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus. Suspendisse semper, mi id commodo tristique, justo purus ultricies sem, vitae pulvinar tellus est ut nunc. Aliquam rhoncus nibh sit amet mi euismod lobortis. Aenean turpis elit, varius id tempor at, ullamcorper sit amet purus."
    },
    {
      question: "Where exactly are you located?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus. Suspendisse semper, mi id commodo tristique, justo purus ultricies sem, vitae pulvinar tellus est ut nunc. Aliquam rhoncus nibh sit amet mi euismod lobortis. Aenean turpis elit, varius id tempor at, ullamcorper sit amet purus."
    },
    {
      question: "What do I need to know?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus. Suspendisse semper, mi id commodo tristique, justo purus ultricies sem, vitae pulvinar tellus est ut nunc. Aliquam rhoncus nibh sit amet mi euismod lobortis. Aenean turpis elit, varius id tempor at, ullamcorper sit amet purus."
    },
    {
      question: "How do I sign up?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus. Suspendisse semper, mi id commodo tristique, justo purus ultricies sem, vitae pulvinar tellus est ut nunc. Aliquam rhoncus nibh sit amet mi euismod lobortis. Aenean turpis elit, varius id tempor at, ullamcorper sit amet purus."
    },
    {
      question: "Do you help me find a job?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget magna volutpat, vehicula ligula vitae, tempus metus. Suspendisse semper, mi id commodo tristique, justo purus ultricies sem, vitae pulvinar tellus est ut nunc. Aliquam rhoncus nibh sit amet mi euismod lobortis. Aenean turpis elit, varius id tempor at, ullamcorper sit amet purus."
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
