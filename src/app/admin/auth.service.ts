import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


export interface UserDetails {
  id: number;
  user_type: string;
  first_name: string;
  last_name: string;
  address: string;
  contact_num: string;
  email: string;
  password: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  id: number;
  user_type: string;
  first_name: string;
  last_name: string;
  address: string;
  contact_num: string;
  email: string;
  password: string;


}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  constructor(private http: HttpClient, private router: Router) { }
  private saveToken(token: string): void {
    localStorage.setItem('userToken', token);
    this.token = token;
    console.log(token);
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('userToken');
    }
    return this.token;
  }
  public getUserDetails(): UserDetails {
    const token = this.getToken()
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload)
      return JSON.parse(payload);
    }
    else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
