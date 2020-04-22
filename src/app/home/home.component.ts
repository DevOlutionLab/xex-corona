import { Component, OnInit } from '@angular/core';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { CasService } from '../_services/cas.service';
import { Cas } from '../models/cas.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faQuoteLeft = faQuoteLeft;

  cas: Cas[];
  error;
  lastCas: Cas;

  constructor(
    private casService: CasService
  ) { }

  ngOnInit(): void {

    this.casService.getCas()
    .subscribe(
      (res: Cas[]) =>  {
        this.cas = res['hydra:member'];

        // Pour avoir le total à partir de la derniere entrée
        this.lastCas = this.cas.slice(-1)[0];
      //  console.log(this.lastCas);
      },
      (err) => {
        this.error = err;
       // console.log(this.error);
      }
    )

  }

}
