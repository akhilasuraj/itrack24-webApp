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
        if (data) {
          if (data.user_type === 'user') {
            this.router.navigateByUrl('/home');
          }
          else if (data.user_type === 'admin') {
            this.router.navigateByUrl('/dashboard');
          }
          else{
            console.log("user_type_not_exist");
          }
        }
      });

  }

  
 async register() {
   await this.auth.register(this.credential).subscribe(
      (data) => {
        if (data) {
         
          console.log(data);
        }
        else{
          
          alert("invalid")
        }
        
      });
  }


}
