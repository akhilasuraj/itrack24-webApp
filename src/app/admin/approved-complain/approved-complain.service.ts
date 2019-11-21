import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovedComplainService {

  constructor(private router:Router, private http:HttpClient) { }

  public progressingComplains():Observable<any>{
    return this.http.get("/admin/inprogresscomplains");
  }

  public getMoredetails(obj):Observable<any>{
    return this.http.post("/admin/getmoredetails", obj);
  }

  public completedcomplains():Observable<any>{
    return this.http.get("/admin/completedcomplains");
  }
}
