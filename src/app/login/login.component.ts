import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css'],

})
export class LoginComponent {
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

  constructor(private auth: AuthenticationService, private router: Router) { }

  async login() {
    await this.auth.login(this.credential).subscribe(
      (data) => {
        console.log(data.user_type);
        if (data.message == "Logged succesfully") {
          if (data.user_type === 'user') {
            this.router.navigateByUrl('/home');
           
          }
          else if (data.user_type === 'admin') {
            this.router.navigateByUrl('/dashboard');
            window.alert(data.message);
          }
        }
        else if (data.message == "Incorrect password") {
          window.alert(data.message);
        }
        else if (data.message == "Incorrect email") {
          window.alert(data.message);
        }
      });

  }


  async register() {
   await  this.auth.register(this.credential).subscribe(
      (result) => {
        if (result.message == "Verification link has been sent to your email") {
          window.alert("Verification link has been sent to your email " + this.credential.email + ".Check and activate your account");
          this.credential.first_name = "";
          this.credential.last_name = "";
          this.credential.address = "";
          this.credential.contact_num = "";
          this.credential.address = "";
          this.credential.email = "";
          this.credential.password = "";
        }
        else if (result.message == "this email registered already.Try another email") {
          window.alert( this.credential.email + " email registered already.Try another email");
        }

      });
  }



}
