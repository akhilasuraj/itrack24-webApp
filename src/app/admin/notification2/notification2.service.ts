import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Notification2Service {

  constructor(private http: HttpClient, private route: Router) { }


  public viewComplain(obj1): Observable<any> {
    return this.http.post(`/admin/gointoComplain`, obj1);
  }

  public viewPost(obj2): Observable<any> {
    return this.http.post(`/admin/gointoPost`, obj2);
  }


  public AcceptPost(data1): Observable<any> {
    return this.http.post(`/admin/acceptpost`, data1);
  }


  public AcceptComplain(data2): Observable<any> {
    return this.http.post(`/admin/acceptcomp`, data2);
  }


  public RejectPost(data3): Observable<any> {
    return this.http.post(`/admin/rejectpost`, data3);
  }


  public RejectComplain(data4): Observable<any> {
    return this.http.post(`/admin/rejectcomp`, data4);
  }


}

