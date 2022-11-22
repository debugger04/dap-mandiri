import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.scss']
})
export class CompAComponent implements OnInit {

  name: string = 'William';
  address: string = 'Jerman';

  btnDisable: boolean = true;
  
  message: string = '';
  countClick: number = 0;

  messageInput: string = '';

  mandiriEmployees = [
    {
      name: 'Adi',
      address: 'Bulan',
      unit: 'Keuangan'
    },
    {
      name: 'Adam',
      address: 'Matahari',
      unit: 'Audit'
    },
    {
      name: 'Rahma',
      address: 'Bintang',
      unit: 'IT'
    },
    {
      name: 'Fulan',
      address: 'Arab',
      unit: 'IT'
    },
  ]

  checkButton(): void {
    setTimeout(() => {
      if(this.btnDisable) {
        this.btnDisable = false;
      } else {
        this.btnDisable = true;
      }
    }, 5000);
  }

  showMe(): void {
    if (this.countClick == 0) {
      this.message = "<h3>Tak selalu ~</h3>";
    } else if (this.countClick == 1) {
      this.message += "<h3>Oooohh~</h3>";
    } else if (this.countClick == 2) {
      this.message += "<h3>Yang berkilau itu indah ~</h3>";
    } else if (this.countClick == 3) {
      this.message += "<h3>Wooohh~</h3>";
    } else {
      this.message = "<h3>Sekali lagi~</h3>"
      this.countClick = -1;
    }
    this.countClick++;
  }

  onMessageInput($event: any): void {
    const { value } = $event.target;
    if (value.toLowerCase() == 'mandiri') {
      this.messageInput = "Aku cinta Bank Mandiri~";
    } else {
      this.messageInput = "Aku tetap cinta Bank Mandiri~";
    }
  }

  constructor(private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.queryParams.subscribe((params) => {
    //   const {name, address} = params;
    //   this.name = name;
    //   this.address = address;
    // });
    this.checkButton();
  }

}
