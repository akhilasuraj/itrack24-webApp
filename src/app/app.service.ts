import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AppService {

  constructor(private http:HttpClient, private route:Router) { }

  public PostCount(data1):Observable<any>{
    return this.http.post(`/users/getPostCount`,data1);
  }
 
  
  public CompCount(data2):Observable<any>{
    return this.http.post(`/users/getCompCount`,data2);
  }

}
