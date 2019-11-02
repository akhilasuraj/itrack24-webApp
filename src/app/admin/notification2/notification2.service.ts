import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Notification2Service {

  constructor(private http:HttpClient, private route:Router) { }

  public ViewCompNotifications():Observable<any>{
    return this.http.get("http://localhost:3000/admin/viewcompNotification");
  }

  public ViewPostNotifications():Observable<any>{
    return this.http.get("http://localhost:3000/admin/viewpostNotification");
  }

  public ViewMoreComplain(obj1):Observable<any>{
    return this.http.post("http://localhost:3000/admin/viewcomplainMore",obj1);
  }

  public ViewMorePost(obj2):Observable<any>{
    return this.http.post("http://localhost:3000/admin/viewpostMore",obj2);
  }
  
  
  public AcceptPost(data1):Observable<any>{
    return this.http.post("http://localhost:3000/admin/acceptpost",data1);
  }

  
  public AcceptComplain(data2):Observable<any>{
    return this.http.post("http://localhost:3000/admin/acceptcomp",data2);
  }

  
  public RejectPost(data3):Observable<any>{
    return this.http.post("http://localhost:3000/admin/rejectpost",data3);
  }


}
