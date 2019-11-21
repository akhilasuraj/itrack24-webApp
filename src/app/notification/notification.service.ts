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

  
  public NotificationCompletedComplains(CCdata):Observable<any>{
    return this.http.post(`/users/viewCompletedCompNotifications`,CCdata)
  }

  
  public Ratejob(obj):Observable<any>{
    return this.http.post(`/users/ratejob`,obj);
  }

  
  public GetSelectPost(data):Observable<any>{
    return this.http.post(`/users/postMore`,data);
  }

  
  public  GetSelectComplain(data):Observable<any>{
    return this.http.post(`/users/complainMore`,data);
  }
  
  public GetSelectCompletedComplain(data1):Observable<any>{
    return this.http.post(`/users/completedcomplainMore`, data1);
  }
}
