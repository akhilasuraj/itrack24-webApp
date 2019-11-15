import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PopPostService {

  constructor(private http:HttpClient, private route:Router) { }

  public GetSelectPost(data):Observable<any>{
    return this.http.post(`http://localhost:3000/users/postMore`,data);
  }

  
  public  GetSelectComplain(data):Observable<any>{
    return this.http.post(`http://localhost:3000/users/complainMore`,data);
  }
  
  public GetSelectCompletedComplain(data1):Observable<any>{
    return this.http.post(`http://localhost:3000/users/completedcomplainMore`, data1);
  }
 
}
