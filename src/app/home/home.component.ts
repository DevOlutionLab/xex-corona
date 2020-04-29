import { Component, OnInit, Input, Output } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;

  public stats = [];

  constructor(private _statsService: StatsService) {}

  ngOnInit() {
    this._statsService.getStats().subscribe(data => (this.stats = data));
  }
}