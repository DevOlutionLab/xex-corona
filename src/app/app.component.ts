import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xex-corona-app';
  faT = faTwitter;
  faF = faFacebook;
  faI = faInstagram;
  faMap = faMap;
  faPaperPlane = faPaperPlane;
  faPhone = faPhone;
  faQuoteLeft = faQuoteLeft;
  faBars = faBars;

  constructor(private router:Router){
    const navEndEvents$ = this.router.events
  .pipe(
  filter(event => event instanceof NavigationEnd)
  );

  navEndEvents$.subscribe((event: NavigationEnd) => {
    gtag('config', 'UA-167102177-1', {
      'page_path': event.urlAfterRedirects
    });
  });
  }
}
