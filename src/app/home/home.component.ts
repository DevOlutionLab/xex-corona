import { Component, OnInit } from '@angular/core';

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
