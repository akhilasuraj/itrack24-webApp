import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PiChartService {

  constructor(private http:HttpClient, private route:Router) { }

  
  public GetCountA():Observable<any>{
    return this.http.get(`http://localhost:3000/users/category_countA`);
  }
  
  public GetCountB():Observable<any>{
    return this.http.get(`http://localhost:3000/users/category_countB`);
  }
}
