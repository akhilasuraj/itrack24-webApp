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
        if (data.message5) {
          if (data.user_type === 'user') {
            this.router.navigateByUrl('/home');
           
          }
          else if (data.user_type === 'admin') {
            this.router.navigateByUrl('/dashboard');
            window.alert(data.message5);
          }
        }
        else if (data.message3) {
          window.alert(data.message3);
        }
        else if (data.message4) {
          window.alert(data.message4);
        }
      });

  }


  async register() {
    await this.auth.register(this.credential).subscribe(
      (result) => {
        if (result.message1) {
          window.alert(result.message1);
          this.credential.first_name = "";
          this.credential.last_name = "";
          this.credential.address = "";
          this.credential.contact_num = "";
          this.credential.address = "";
          this.credential.email = "";
          this.credential.password = "";
        }
        else if (result.message2) {
          window.alert(result.message2);
        }

      });
  }



}
