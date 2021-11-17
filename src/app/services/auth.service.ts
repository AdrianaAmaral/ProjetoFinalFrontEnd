import { API_CONFIG } from './../Config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credencial } from '../models/credencial';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) { }

  authenticate(cred: Credencial) {
  return this.http.post(`${API_CONFIG.baseUrl}/login`, cred, {
  observe: 'response',
  responseType: 'text'
  })
}

sucessfulLogin(authToken: string) {
  localStorage.setItem('token', authToken);
}

isAuthenticated() {
  let token = localStorage.getItem('token')
  if(token != null) {
 return !this.jwtService.isTokenExpired(token)
  }
  return false
}
logout() {
  localStorage.clear();
}
}
