import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { LoginResult } from '../models/login-result';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl: string = environment.path;

  constructor(private http: HttpClient) { }

  login(obj: Login):Observable<LoginResult> {
    const url = `${this.baseUrl}/login`;
    return this.http.post<LoginResult>(url, obj);
  }
}
