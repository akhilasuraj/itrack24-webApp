import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  credential: TokenPayload = {
    id: 0,
    user_type: '',
    first_name: '',
    last_name: '',
    address: '',
    contact_num: '',
    email: '',
    password: '',
   
   
};

message : string;

  constructor(private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  resetPassword(){
     this.auth.ResetPassword(this.credential).subscribe(
       (data)=>{
         if(data){
          this.message = ('Email has sent to the'+ this.credential.email);
           console.log(data);
           window.location.reload();
         }
       }
     )
  }
}
