import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovedComplainService {

  constructor(private router:Router, private http:HttpClient) { }

  public GetComplains():Observable<any>{
    return this.http.get("http://localhost:3000/admin/acceptedcomplains");
  }

  public SelectSupervisor(data):Observable<any>{
    return this.http.post("http://localhost:3000/admin/selectsupervisor",data);
  }

}
