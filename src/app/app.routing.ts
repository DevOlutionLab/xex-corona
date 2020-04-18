import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestComponent } from './test/test.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { TestposComponent } from './testpos/testpos.component';
import { TestnegComponent } from './testneg/testneg.component';

const routes: Routes = [
    { path: 'ftaw', component: FontAwesomeModule },
    { path: 'test', component: TestComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'home', component: HomeComponent },
    { path: 'testpos', component: TestposComponent },
    { path: 'testneg', component: TestnegComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
