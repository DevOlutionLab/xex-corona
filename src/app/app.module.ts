import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestComponent } from './test/test.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { TestposComponent } from './testpos/testpos.component';
import { TestnegComponent } from './testneg/testneg.component';
import { MembreComponent } from './membre/membre.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TestComponent,
    FaqComponent,
    HomeComponent,
    TestposComponent,
    TestnegComponent,
    MembreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
