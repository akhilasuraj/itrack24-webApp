import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';


export interface TokenPayload {
  post_id:number;
  UserID:number;
  FirstName:string;
  LastName:string;
  PostText:string;
  PostImg:string;
  PostDate:string;
  PostTime:string;
}

@Injectable()
export class PostService {
  
  constructor(private http:HttpClient, private route:Router) {}

  public makePost(posts: TokenPayload): Observable<any>{
    return this.http.post(`http://localhost:3000/users/addpost`, posts);
  }
  
  public uploadPostImage(fd): Observable<any>{
    return this.http.post(`http://localhost:3000/users/addimage`, fd);
  }

  // public viewPostImage(viewimg: TokenPayload): Observable<any>{
  //   return this.http.post(`http://localhost:3000/users/viewpostimg`,viewimg);
  // }

}

