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
    user_type: 'user',
    first_name: '',
    last_name: '',
    address: '',
    contact_num: '',
    email: '',
    password: '',

  };

  constructor(private auth: AuthenticationService, private router: Router) { }
  login() {

    if (this.credential.email !== '' && this.credential.password !== '') {
      this.auth.login(this.credential).subscribe(
        (data) => {
          console.log(data);
          if (data) {
            if (this.auth.getUserDetails().user_type === 'user') {
              this.router.navigateByUrl('/home');
            } else {
              this.router.navigateByUrl('/admin');
            }
          } else {
            alert('Invalid');
          }
        },
        err => {
          console.error(err);
        }
      );

    }

  }
  register() {
    this.auth.register(this.credential).subscribe(
      (data) => {
        if (data) {
          console.log(data);
          this.router.navigateByUrl('/profile');
        }
        else {
          alert('invalid');
        }
      },
    )
  };
}
