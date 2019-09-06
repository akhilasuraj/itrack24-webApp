import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { MypostService } from './mypost.service';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})


export class MypostComponent implements OnInit {
  
  userID;
  postdata;
  userid;

  postID={
    postid:0
  }
  constructor(private mp: MypostService, private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
     this.userID = this.auth.getUserDetails().id
}

  public getMyPost() {

    console.log(this.auth.getUserDetails().id);
    this.mp.myposts(this.userID).subscribe(
      data => {
        this.postdata=data;
        console.log(this.postdata)
      })
  }

  public delete(id,UserID){
    this.userid=UserID;
    this.postID.postid=id;
    console.log(this.userid);
    console.log(this.postID.postid);
    
    if(this.userid==this.auth.getUserDetails().id){
      console.log("id matched");
      this.mp.delpost(this.postID.postid).subscribe(
        result=>{
          window.location.reload();
        });
    }
  }


}



