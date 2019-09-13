import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { NavbarService} from '../navbar/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements CanActivate{
  userData = {
    uid: 0
  }

  navData ={
    user_ID:0
  }

  postcount;
  compcount;
  fileUrl;

constructor(private ns:NavbarService,private auth: AuthenticationService, private router: Router) { }

canActivate(): boolean {
  if (!this.auth.isLoggedIn()) {
     this.router.navigateByUrl('/login');
     return false;
  }
  return true;
}

ngOnInit(){
  this.userData.uid = this.auth.getUserDetails().id;
  this.navData.user_ID = this.auth.getUserDetails().id;
  console.log(this.navData);

  this.ns.NavImage(this.navData).subscribe(
    data=>{
      this.fileUrl = data;
      console.log("this is navbar pro image =" + data);
    });

  this.ns.PostCount(this.userData).subscribe(
    data1 => {
      this.postcount=data1;
      console.log(this.postcount);
    });
  this.ns.CompCount(this.userData).subscribe(
    data2 => {
      this.compcount=data2;
      console.log(this.compcount);
    });

  }


}
