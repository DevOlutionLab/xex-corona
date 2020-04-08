import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestComponent } from './test/test.component';
import { FaqComponent } from './faq/faq.component';
import { AlertComponent } from './alert/alert.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    TestComponent,
    FaqComponent,
    AlertComponent,
    RecommendationComponent,
    SensibilisationComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }