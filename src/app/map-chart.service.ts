import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MapChartData } from './mapChartData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapChartService {

  private _url: string = "/assets/data/mapChartData.json"

  constructor(private http: HttpClient) {}

  getCasesPerRegion(): Observable<MapChartData[]> {
      return this.http.get<MapChartData[]>(this._url);
  }
}
