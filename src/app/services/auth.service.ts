import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl ='http://localhost:7506/api';

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    console.log(credentials);
    return this.http.post(`${this.baseUrl}/login`, credentials,{responseType :'text'});
  }

  register(credentials: any): Observable<any> {
    console.log(credentials);
    return this.http.post(`${this.baseUrl}/register`, credentials,{responseType :'text'});
  }
}
