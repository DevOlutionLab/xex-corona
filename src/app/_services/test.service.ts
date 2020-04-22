import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  sendTestData(data) {
    return this.http.post<any>(`${environment.apiUrl}/tester`, data);
  }
}
