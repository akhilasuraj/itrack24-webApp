import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient, private route:Router) {  }

  public NotificationPosts(Pdata):Observable<any>{
    return this.http.post(`/users/viewPostNotifications`,Pdata)
  }
  
  
  public NotificationComplains(Cdata):Observable<any>{
    return this.http.post(`/users/viewCompNotifications`,Cdata)
  }
}
