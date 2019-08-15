import { Component, OnInit } from '@angular/core';
import { TokenPayload, AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  credential: TokenPayload = {
    id: 0,
    user_type: 'user',
    first_name: '',
    last_name: '',
    address:  '',
    contact_num: '',
    email: '',
    password: '',
    profilepic:''
 
   
}

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  this.credential.first_name = this.auth.getUserDetails().first_name;
  this.credential.last_name = this.auth.getUserDetails().last_name;
  this.credential.address = this.auth.getUserDetails().address;
  this.credential.contact_num = this.auth.getUserDetails().contact_num;
  this.credential.email = this.auth.getUserDetails().email;
  }

  EditProfile() {

    this.credential.id = this.auth.getUserDetails().id;

    this.auth.EditProfile(this.credential).subscribe(
     (data) => {
       if(data) {
         this.router.navigateByUrl('/profile');
       } else{
         alert('invalid');
       }
     },
    )
     }



}



