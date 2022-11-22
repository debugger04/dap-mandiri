import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  title: string = "Dikirim dari parent anjas kelas";
  count: number = 0;
  stringMandiri: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
