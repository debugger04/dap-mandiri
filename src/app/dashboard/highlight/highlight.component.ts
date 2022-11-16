import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {
  title: string = "";
  constructor() { }

  ngOnInit(): void {
    let ap = new AppComponent();
    this.title = ap.title;
  }

}
