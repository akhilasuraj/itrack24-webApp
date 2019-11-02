import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable, of, observable} from 'rxjs';

@Injectable()
export class NavbarService {
  constructor(private http: HttpClient, private route: Router) { }

  public PostCount(data1): Observable<any> {
    return this.http.post(`http://localhost:3000/users/getPostCount`, data1);
  }

  public CompCount(data2): Observable<any> {
    return this.http.post(`http://localhost:3000/users/getCompCount`, data2);
  }
  
  public NavImage(navImg): Observable<any> {
    return this.http.post(`http://localhost:3000/users/viewnavimage`, navImg);
  }
}
