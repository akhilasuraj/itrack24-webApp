import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, observable} from 'rxjs';
import {Router} from '@angular/router';


export interface PostDetails{
  post_id:number;
  UserID:number;
  FirstName:string;
  LastName:string;
  PostContent:string;
  PostTitle:string;
  PostImg:string;
  PostDate:string;
  PostTime:string;
}

@Injectable()
export class PostService {
  
  constructor(private http:HttpClient, private route:Router) {}

  public makePost(fd): Observable<any>{
    return this.http.post(`http://localhost:3000/users/addpost`, fd);
  }
}

