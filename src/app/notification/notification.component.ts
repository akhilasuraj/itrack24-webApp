import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from './notification.service';
import { AuthenticationService } from '../authentication.service';
import { RatingComponent } from '../rating/rating.component';
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
  notificationCompletedComp;
  notificationPost;

  userData = {
    UserID: 0,
    user_id: 0
  }

  postData = {
    id: 0
  }

  compData = {
    id: 0,
    ratevalue: 0
  }

  completedcompData = {
    id: 0,
    rate:0
  }
  currentRate;

   
  subscription1;
  subscription2;

  constructor(private ns: NotificationService, private auth: AuthenticationService, private route: Router, private rc: RatingComponent) { }

  ngOnInit() {

    this.userData.UserID = this.auth.getUserDetails().id;
    this.userData.user_id = this.auth.getUserDetails().id;

    // this.subscription1 = timer(0, 800).pipe(
    //   switchMap(() =>
    console.log("this is notifiaction page");
    this.ns.NotificationPosts(this.userData).subscribe(
      data1 => {
        console.log("*******");
        this.notificationPost = data1;
        console.log(this.notificationPost);
      });


    // this.subscription1 = timer(0, 800).pipe(
    //   switchMap(() =>
    this.ns.NotificationComplains(this.userData).subscribe(
      data2 => {
        this.notificationComp = data2;
      });

    // this.subscription1 = timer(0, 800).pipe(
    //   switchMap(() =>
    this.ns.NotificationCompletedComplains(this.userData).subscribe(
      data3 => {
        this.notificationCompletedComp = data3;
      });

  }

  GetValues(id: number) {      //VIEW_MORE
    this.postData.id = id;

    console.log("postdata " + this.postData.id);
  }


  GetValuesComp(id: number) {      //VIEW_MORE
    this.compData.id = id;

    console.log("compdata " + this.compData.id);
  }


  GetValuesCompletedComp(id: number) {      //VIEW_MORE
    this.completedcompData.id = id;
    // console.log("rate " +  this.completedcompData.ratevalue);
    // console.log("compdata " + this.completedcompData.id);
  }

  Ratevalue() {
    console.log(this.currentRate);
    this.completedcompData.rate = this.currentRate;
    this.ns.Ratejob(this.completedcompData).subscribe(
      data => {
        window.alert("Thanks for your feedback");
      })
  }

  // ngOnDestroy() {
  //   this.subscription1.unsubscribe()
  // }

}


