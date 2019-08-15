import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';

@Component({
   templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {


 details: UserDetails;

constructor(private auth: AuthenticationService) { }
  ngOnInit() {
    this.auth.profile().subscribe(
      user => {
        console.log(user);
        this.details = user;
      },
      err => {
        console.error(err)
      }
    )
  }
}

