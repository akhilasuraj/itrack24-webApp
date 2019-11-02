import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification2Service } from './notification2.service';


@Component({
  selector: 'app-notification2',
  templateUrl: './notification2.component.html',
  styleUrls: ['./notification2.component.css']
})
export class Notification2Component implements OnInit {
  compdata;
  postdata;

  compDetail = {
    id: 0
  };
  postDetail = {
    id: 0
  };

  constructor(private no: Notification2Service, private router: Router) { }

  ngOnInit() {
    this.no.ViewCompNotifications().subscribe(
      (data1) => {
        this.compdata = data1;
        console.log(this.compdata);
      });

    this.no.ViewPostNotifications().subscribe(
      (data2) => {
        this.postdata = data2;
        console.log(this.postdata);
      });
  }

  //VIEW_MORE
  ViewMoreComp(id) { //GET_THE_ID_WHEN_CLICK_VIEWMORE
    this.compDetail.id = id;
    this.no.ViewMoreComplain(this.compDetail).subscribe(
      (data) => {
        this.router.navigateByUrl("/");
      });
  }

  ViewMorePost(id) {
    this.postDetail.id = id;
    this.no.ViewMorePost(this.postDetail).subscribe(
      (data) => {
        this.router.navigateByUrl("/");
      });
  }

  //ACCEPT_POST_&_COMPLAIN
  AcceptC(id) {
    this.postDetail.id = id;
    this.no.AcceptPost(this.postDetail).subscribe(
      (res) => {
        this.router.navigateByUrl("/");
      });
  }


  AcceptP(id) {
    this.compDetail.id = id;
    this.no.AcceptComplain(this.compDetail).subscribe(
      (res) => {
        this.router.navigateByUrl("/approvedComplain");
      });
  }

  //REJECT_USER_POST
  Reject(id){
    this.postDetail.id = id;
    this.no.RejectPost(this.postDetail).subscribe(
      (res)=>{
        this.router.navigateByUrl("/");
      });
  }

}
