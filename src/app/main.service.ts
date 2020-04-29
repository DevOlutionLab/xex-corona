import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { Imain } from './stats'

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private _url: string = "/assets/data/main.json"

  constructor(private http: HttpClient) {}

  getMain(): Observable<Imain[]> {
        return this.http.get<Imain[]>(this._url);
  }
}