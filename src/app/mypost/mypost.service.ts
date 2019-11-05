import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class MypostService {
  constructor(private http:HttpClient, private route:Router) {}

  public myposts(id):Observable<any>{
    return this.http.post(`/users/viewmyposts`,{uid:id});
  }

  public delpost(postid):Observable<any>{
    return this.http.post(`/users/deletepost`,{postid:postid});
  }
}
