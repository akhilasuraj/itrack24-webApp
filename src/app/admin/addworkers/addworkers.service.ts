import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddworkersService {

  constructor(private router:Router, private http:HttpClient) { }

  public AddWorker(obj):Observable<any>{
    return this.http.post("/admin/registerWorker",obj)
  }
}
