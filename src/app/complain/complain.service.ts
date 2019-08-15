import { TokenPayload } from './complain.service';
import {HttpClient} from '@angular/common/http';
import {Observable, of, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


export interface CompalinDetails {
  user_id: number;
  category: string;
  description: string;
  address1: string;
  address2: string;
  district: string;
  date:string;
  time:string;
  img_url: string;
  longitude: number;
  latitude: number;
}



export interface TokenPayload {

  complain_id: number;
  user_id: number;
  category: string;
  description: string;
  address1: string;
  address2: string;
  district: string;
  date:string;
  time:string;
  longitude: number;
  latitude: number;
}


@Injectable()
export class ComplainService {
  constructor(private http: HttpClient, private router: Router)  {}

  public complain(complains: TokenPayload): Observable<any> {
    return this.http.post(`http://localhost:3000/users/complain`, complains);
  }

  public sendUserID(userData): Observable<any>{
    return this.http.post(`http://localhost:3000/users/getID`, userData);
  }

  public uploadPhoto(fd): Observable<any>{
    return this.http.post(`http://localhost:3000/users/upload-image`, fd);
  }

  public viewPhoto(userData): Observable<any>{
    return this.http.post(`http://localhost:3000/users/view_photo`, userData);
  }
}


