import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class MypostService {
  constructor(private http: HttpClient, private route: Router) { }

  public myAcceptedposts(obj1): Observable<any> {
    return this.http.post(`/users/acceptedposts`, obj1);
  }


  public myEditableposts(obj2): Observable<any> {
    return this.http.post(`/users/editableposts`, obj2);
  }


  public delpost(obj3): Observable<any> {
    return this.http.post(`/users/deletepost`,obj3 );
  }

  public editPost(obj4): Observable<any> {
    return this.http.post(`/users/editpost`,obj4 );
  }

  public updatePost(fd): Observable<any> {
    return this.http.post(`/users/updatepost`, fd);
  }
  


}
