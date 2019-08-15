import { TokenPayload } from './authentication.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

export interface UserDetails {
        id: number;
        user_type: string;
        first_name: string;
        last_name: string;
        address: string;
        contact_num: string;
        email: string;
        password: string;
        // profilepic: string;
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
    profilepic:string
    
}

@Injectable()
export class AuthenticationService {
  private token: string;
   constructor(private http: HttpClient, private router: Router)  {}
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
       const token = this.getToken();
       let payload;
       if (token) {
           payload = token.split('.')[1];
           payload = window.atob(payload);
           return JSON.parse(payload);
       } else {
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

   public register(user: TokenPayload): Observable<any> {
       const base = this.http.post(`http://localhost:3000/users/register`, user);

       const request = base.pipe(
          map((data: TokenResponse) => {
               if (data.token) {
                   this.saveToken(data.token);
                   return data;
               } else {
                 return null;
               }

          })
       );

       return request ;
   }
   public login(user: TokenPayload): Observable<any> {
    const base = this.http.post(`http://localhost:3000/users/login`, user);

    const request = base.pipe(
       map((data: TokenResponse) => {
            if (data.token) {
                  this.saveToken(data.token);
               }
            {
              return data;

               }
       })
    );

    return request ;
}// profile
    public profile(): Observable<any> {
        return this.http.get(`http://localhost:3000/users/profile`, {
           headers: { Authorization: `${this.getToken()}` }
        });
     }
// logout
     public logout(): void {
       this.token = '';
       window.localStorage.removeItem('userToken');
       this.router.navigateByUrl('/');
       console.log('logout');
     }

// reset_password
  public ResetPassword(user: TokenPayload): Observable<any> {
    const base = this.http.post(`http://localhost:3000/reset-password`, user);

    const request = base.pipe(
       map((data: TokenResponse) => {
            if (data.token) {
                this.saveToken(data.token);
                return data;
            } else {
              return null;
            }

       })
    );

    return request;
      }


// edit-profile
     public EditProfile(user: TokenPayload): Observable<any> {
      const base = this.http.post(`http://localhost:3000/users/editprofile`, user);

      const request = base.pipe(
         map((data: TokenResponse) => {
              if (data.token) {
                  this.saveToken(data.token);
                  return data;
              } else {
                return null;
              }

         })
      );

      return request;
        }

  /*uploadpropic*/


}


