import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { AuthenticationService } from '../authentication.service';
import { switchMap } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';
import { Subscription, timer, pipe } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificationComp;
  notificationPost;

  userData = {
    UserID: 0,
    user_id: 0
  }

  postData = {
    id: 0
  }
  
  compData = {
    id: 0
  }

  marked = true;
  

  subscription1;
  subscription2;

  constructor(private ns: NotificationService, private auth: AuthenticationService, private route: Router) { }

  ngOnInit() {
    this.userData.UserID = this.auth.getUserDetails().id;
    this.userData.user_id = this.auth.getUserDetails().id;

    // this.subscription1 = timer(0, 800).pipe(
    //   switchMap(() =>
     this.ns.NotificationPosts(this.userData).subscribe(
      data1 => {
      
        this.notificationPost = data1;
      });


    // this.subscription1 = timer(0, 800).pipe(
    //   switchMap(() =>
      this.ns.NotificationComplains(this.userData).subscribe(
      data2 => {
       
       this.notificationComp = data2;
      });

  }

  GetValues(id: number) {      //VIEW_MORE
    this.postData.id = id;
    this.marked = false
    console.log("postdata " + this.postData.id);
  }


  GetValuesComp(id: number) {      //VIEW_MORE
    this.compData.id = id;
    this.marked = false
    console.log("compdata " + this.compData.id);
  }


  ngOnDestroy() {
    this.subscription1.unsubscribe()
  }

}


