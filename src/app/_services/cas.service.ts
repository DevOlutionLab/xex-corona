import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CasService {

  constructor(
    private http: HttpClient
  ) { }

  getCas() {
    return this.http.get<any>( `${environment.apiUrl}/cas`)
      .pipe(
        retry(3)
      )
  }
}
