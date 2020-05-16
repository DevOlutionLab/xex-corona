import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TestposComponent } from './testpos/testpos.component';
import { TestnegComponent } from './testneg/testneg.component';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestComponent } from './test/test.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { MembreComponent } from './membre/membre.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StatsService } from './stats.service';
import { MapChartComponent } from './map-chart/map-chart.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';


@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule,
    GoogleChartsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    TestComponent,
    TestposComponent,
    TestnegComponent,
    FaqComponent,
    MembreComponent,
    MapChartComponent
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
