import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';


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


@Injectable()
export class ComplainService {
  constructor(private http: HttpClient, private router: Router)  {}

  public complain(fd): Observable<any> {
    return this.http.post(`/users/complain`,fd);
  }


}


