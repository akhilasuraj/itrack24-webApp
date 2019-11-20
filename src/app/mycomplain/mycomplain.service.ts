import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';



@Injectable()
export class MycomplainService {

  constructor(private http:HttpClient, private route: Router) { }

  public AcceptedMyComp(data):Observable<any>{
    return this.http.post(`/users/mycomplains`,data);
  }
 
  public EditableMyComp(data):Observable<any>{
    return this.http.post(`/users/editablecomplains`,data);
  }
    
  public deleteComplain(data):Observable<any>{
    return this.http.post(`/users/deletecomplains`,data);
  }
  
}
