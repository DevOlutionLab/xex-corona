import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TestComponent } from './test/test.component';
import { FaqComponent } from './faq/faq.component';
import { AlertComponent } from './alert/alert.component';
import { RecommendationComponent } from './recommendation/recommendation.component';
import { SensibilisationComponent } from './sensibilisation/sensibilisation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: 'ftaw', component: FontAwesomeModule },
    { path: 'test', component: TestComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'alert', component: AlertComponent },
    { path: 'reco', component: RecommendationComponent },
    { path: 'ssb', component: SensibilisationComponent },
    { path: 'home', component: HomeComponent },

    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
