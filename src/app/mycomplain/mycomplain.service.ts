import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';



@Injectable()
export class MycomplainService {

  constructor(private http:HttpClient, private route: Router) { }

  public getMyComp(data):Observable<any>{
    return this.http.post(`/users/mycomplains`,data);
  }
  
}
