import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserDetails, TokenPayload } from '../authentication.service';

@Component({
   templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {


 details: UserDetails;

 userData = {
  user_ID: 5
};
 SelectedFile: File;
 fileUrl;

constructor(private auth: AuthenticationService, private router: Router) { }
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

  OnFileSelected(event){
          
    this.SelectedFile =  event.target.files[0] as File;
    
  }

  Upload(){
    this.userData.user_ID = this.auth.getUserDetails().id;
    const fd = new FormData();
    fd.append('prophoto', this.SelectedFile, this.SelectedFile.name);

    this.auth.sendUserID(this.userData).subscribe(
    res => { }
    );


    this.auth.uploadPhoto(fd).subscribe(
      res => {
        window.location.reload();
      }
    );

    window.location.reload();
  }

}

