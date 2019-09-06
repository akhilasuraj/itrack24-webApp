import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userData = {
    uid: 0
  }

  postcount;
  compcount;


  constructor(public as: AppService, public auth: AuthenticationService, public route: Router) { }

  ngOnInit() {
    this.userData.uid = this.auth.getUserDetails().id;

    this.as.PostCount(this.userData).subscribe(
      data1 => {
        this.postcount=data1;
        console.log(this.postcount);
      });
    this.as.CompCount(this.userData).subscribe(
      data2 => {
        this.compcount=data2;
        console.log(this.compcount);
      });
  }

}

