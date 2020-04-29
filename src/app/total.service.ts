import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { Itotal } from './stats';

@Injectable({
  providedIn: 'root'
})
export class TotalService {
  private _url: string = "/assets/data/total.json"

  constructor(private http: HttpClient) {}

  getTotal(): Observable<Itotal[]> {
    return this.http.get<Itotal[]>(this._url);
  }
}