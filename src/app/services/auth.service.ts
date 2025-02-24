import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl ='http://localhost:8080';

  constructor(private http: HttpClient) {}

  // login(credentials: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/login`, credentials);
  // }

  // register(credentials: any): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/register`, credentials);
  // }
}
