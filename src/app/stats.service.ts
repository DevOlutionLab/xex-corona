import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { Istats } from './stats'

@Injectable({
    providedIn: "root"
})
export class StatsService {
    private _url: string = "/assets/data/stats.json"

    constructor(private http: HttpClient) {}

    getStats(): Observable<Istats[]> {
        return this.http.get<Istats[]>(this._url);
    }
}