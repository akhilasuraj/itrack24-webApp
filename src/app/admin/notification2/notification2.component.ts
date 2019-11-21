import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notification2Service } from './notification2.service';
import { DashboardComponent } from '../dashboard/dashboard.component';


@Component({
  selector: 'app-notification2',
  templateUrl: './notification2.component.html',
  styleUrls: ['./notification2.component.css']
})
export class Notification2Component implements OnInit {
  Compinfo: any;
  Postinfo: any;
  constructor(private ns: Notification2Service, private router: Router, private dc: DashboardComponent) { }

  compDetail = {
    id: 0,
    reason:''
  };

  postDetail = {
    id: 0
  };

  reason;

  signed;

  ngOnInit() {
    this.compDetail.id = this.dc.compData.id;
    console.log("//" + this.compDetail.id);
    this.ns.viewComplain(this.compDetail).subscribe(
      (dataC) => {
        if (dataC != null) {
          this.Compinfo = dataC;
          this.signed = true;
          console.log(this.Compinfo);
        }
      });

    this.postDetail.id = this.dc.postData.id;
    console.log("//" + this.postDetail.id);
    this.ns.viewPost(this.postDetail).subscribe(
      (dataP) => {
        if (dataP != null) {
          this.Postinfo = dataP;
          this.signed = false;
          console.log(this.Postinfo);
        }
      });

  }



  //ACCEPT_POST_&_REJECT_COMPLAINS
  AcceptComp() {
    console.log(this.compDetail.id)
    this.ns.AcceptComplain(this.compDetail).subscribe(
      (res) => {
        window.alert("Complain was accepted!!")
        this.dc.marked = true;
        window.location.reload();
      });
  }

  RejectComp() {
    console.log(this.compDetail.id);
    this.compDetail.reason = this.reason;
    console.log(this.compDetail.reason);
    this.ns.RejectComplain(this.compDetail).subscribe(
      (res) => {
        window.alert("Complain was rejected!")
         this.dc.marked = true;
         window.location.reload();
      });
  }


  //ACCEPT_&_REJECT_POSTS
  AcceptPost() {
    console.log(this.postDetail.id);
    this.ns.AcceptPost(this.postDetail).subscribe(
      (res) => {
        window.alert("Post was accepted!!")
        this.dc.marked = true;
        window.location.reload();
      });
  }



  RejectPost() {
    console.log(this.postDetail.id);
    this.ns.RejectPost(this.postDetail).subscribe(
      (res) => {
        window.alert("Post was rejected!!")
        this.dc.marked = true;
        window.location.reload();
      });
  }




}