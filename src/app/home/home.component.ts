import { Component, OnInit, Input, Output } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { StatsService } from '../stats.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;

  public main = [];
  public stats = [];
  
  constructor(private _mainService: MainService,private _statsService: StatsService) {}

  ngOnInit() {
    this._statsService.getStats().subscribe(data => (this.stats = data));
    this._mainService.getMain().subscribe(data => (this.main = data));
  }
}