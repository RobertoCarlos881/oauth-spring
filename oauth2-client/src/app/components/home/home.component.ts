import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit () {
    console.log(btoa('client:secret'));

  }
}
