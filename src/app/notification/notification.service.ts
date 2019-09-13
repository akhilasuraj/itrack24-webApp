import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http:HttpClient, private route:Router) {  }

  public getOtherPosts(Pdata):Observable<any>{
    return this.http.post(`http://localhost:3000/users/viewPostNotifications`,Pdata)
  }
  
  
  public getOtherComplains(Cdata):Observable<any>{
    return this.http.post(`http://localhost:3000/users/viewCompNotifications`,Cdata)
  }
}
