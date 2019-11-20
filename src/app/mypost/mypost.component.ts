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
  userData = {
    UserID: 0
  }

  userid;

  Acceptedpost;
  Editablepost;

  postID = {
    id: 0
  }

  marked = true;

  constructor(private mp: MypostService, private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.userData.UserID = this.auth.getUserDetails().id

    this.mp.myAcceptedposts(this.userData).subscribe(
      data => {
        this.Acceptedpost = data;
        console.log(this.Acceptedpost)
      });

      this.mp.myEditableposts(this.userData).subscribe(
        result => {
          this.Editablepost = result;
          console.log(this.Editablepost);
        });
  }

  //delete_a_post
  public delete(id, UserID) {
    this.userid = UserID;
    this.postID.id = id;
    console.log(this.userid);
    console.log(this.postID.id);

    if (this.userid == this.auth.getUserDetails().id) {  //TO_AVOID_UNAUTHORIZED_ACCESS
      console.log("id matched");
      this.mp.delpost(this.postID).subscribe(
        (result) => {
          if (result.message) {
            window.alert(result.message);
            window.location.reload();
          }
        });
    }
    else {
      window.alert("You have no permission to delet this post")
    }
  }

  getEditpostId(id: number) {
    this.marked = false;
    this.postID.id = id;
  };

}



