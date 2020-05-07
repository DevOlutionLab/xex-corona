import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { TestposComponent } from './testpos/testpos.component';
import { TestnegComponent } from './testneg/testneg.component';
import { FaqComponent } from './faq/faq.component';
import { MembreComponent } from './membre/membre.component';

const routes: Routes = [
    { path: 'ftaw', component: FontAwesomeModule },
    { path: 'faq', component: FaqComponent },
    { path: 'home', component: HomeComponent },
    { path: 'membre', component: MembreComponent },
    { path: 'test', component: TestComponent },

    { path: 'testpos', component: TestposComponent },
    { path: 'testneg', component: TestnegComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' }

];

export const appRoutingModule = RouterModule.forRoot(routes);
