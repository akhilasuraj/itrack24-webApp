import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Navbar2Service {

  constructor(private http:HttpClient, private router:Router) { }

  public getcompCount():Observable<any>{
    return this.http.get("/admin/compcount");
  }

  
  public getpostCount():Observable<any>{
    return this.http.get("/admin/postcount");
  }
}
