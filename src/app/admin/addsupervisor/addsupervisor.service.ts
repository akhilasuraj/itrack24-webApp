import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AddsupervisorService {

  constructor(private http: HttpClient, private router: Router) { }

  public AddSupervisor(obj): Observable<any>{
    return this.http.post("/admin/registerSupervisor",obj)
  }
}
