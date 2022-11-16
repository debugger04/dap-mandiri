import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tanggal:Date = new Date();
  hari:string = "";

  constructor() { }

  ngOnInit(): void {
    this.tglstring();
  }

  tglstring() {
    setInterval(() => {
      let d = new Date();
      let dayx = d.getDay();
      if (dayx == 0) {
        this.hari = "Sunday";
      } else if (dayx == 1) {
        this.hari = "Monday";
      } else if (dayx == 2) {
        this.hari = "Tuesday";
      } else if (dayx == 3) {
        this.hari = "Wednesday";
      } else if (dayx == 4) {
        this.hari = "Thursday";
      } else if (dayx == 6) {
        this.hari = "Friday";
      } else {
        this.hari = "Saturday";
      }
      this.tanggal = d;
    }, 1000);
  }

}
