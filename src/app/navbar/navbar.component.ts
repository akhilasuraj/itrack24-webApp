import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NavbarService} from '../navbar/navbar.service';
import * as socketIo from 'socket.io-client';
import { Subscription, timer, pipe } from 'rxjs';
import { switchMapTo, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements CanActivate{
  userData = {
    user_id: 0,
    UserID:0
  }
  
  navData = {
    id:0
  }

  postcount;
  compcount;
  fileUrl;

  subscription1;
  subscription2;

constructor(private ns:NavbarService,private auth: AuthenticationService, private router: Router) { }

canActivate(): boolean {
  if (!this.auth.isLoggedIn()) {
     this.router.navigateByUrl('/login');
     return false;
  }
  return true;
}

ngOnInit(){
  this.userData.UserID = this.auth.getUserDetails().id;
  this.userData.user_id = this.auth.getUserDetails().id;
  this.navData.id  = this.auth.getUserDetails().id

 //NAVBAR_PROFILE_IMAGE
    this.ns.NavImage(this.navData).subscribe(
      data=>{
        this.fileUrl = data;
        console.log("this is navbar pro image =" + data);
      });
 

//  this.subscription1 = timer(0,10000).pipe(
// switchMap(()=>
this.ns.PostCount(this.userData).subscribe(
    data1 => {
      this.postcount=data1;
      console.log(this.postcount);
    });
 
  

//  this.subscription2 = timer(0,1000).pipe(
//  switchMap(()=>
this.ns.CompCount(this.userData).subscribe( 
    data2 => {
      this.compcount=data2;
      console.log(this.compcount);
    });  

  }
  
  
  // ngOnDestroy(){
  //   this.subscription1.unsubscribe()
  //   this.subscription2.unsubscribe()
  // }



}






