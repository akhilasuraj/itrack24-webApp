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
  constructor(private ns: Notification2Service, private router: Router, private dc: DashboardComponent) { }

  compDetail = {
    id: 0
  };

  postDetail = {
    id: 0
  };

  Compinfo;
  Postinfo;

  signed;

  ngOnInit() {
    this.compDetail.id = this.dc.compData.id;
    console.log("//" + this.compDetail.id);
    this.ns.viewComplain(this.compDetail).subscribe(
      (dataC) => {
        this.Compinfo = dataC;
        console.log(this.Compinfo);
        if (this.Compinfo = null) {
         this.signed = true;
        }
       
      });

    this.postDetail.id = this.dc.postData.id;
    console.log("//" + this.postDetail.id);
    this.ns.viewPost(this.postDetail).subscribe(
      (dataP) => {
        this.Postinfo = dataP;
        console.log( this.Postinfo);
        if (this.Postinfo = null) {
          this.signed = false;
        }
        
      });
  }



  //ACCEPT_POST_&_REJECT_COMPLAINS
  AcceptComp() {
   
    console.log( this.compDetail.id)
    this.dc.marked = true;
    this.ns.AcceptComplain(this.compDetail).subscribe(
      (res) => {

      });
  }

  RejectComp() {
   
    console.log( this.compDetail.id);
    this.dc.marked = true;
    this.ns.RejectComplain(this.compDetail).subscribe(
      (res) => {

      });
  }


//ACCEPT_&_REJECT_POSTS  
  AcceptPost() {
    console.log(this.postDetail.id);
    this.dc.marked = true;
    this.ns.AcceptPost(this.postDetail).subscribe(
      (res) => {

      });
  }

  RejectPost() {
    
    console.log( this.postDetail.id);
    this.dc.marked = true;
    this.ns.RejectPost(this.postDetail).subscribe(
      (res) => {

      });
  }

  


}
