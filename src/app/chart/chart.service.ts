import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';



@Injectable()
export class ChartService {

  constructor(private http:HttpClient, private route:Router) { }

  public GetCount1():Observable<any>{
    return this.http.get(`http://localhost:3000/users/category_count1`);
  }
  
  
  public GetCount2():Observable<any>{
    return this.http.get(`http://localhost:3000/users/category_count2`);
  }
  
}
