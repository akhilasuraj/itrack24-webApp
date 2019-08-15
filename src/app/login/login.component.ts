import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { MatCardModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component ({
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
         profilepic:''
   };

    constructor(private auth: AuthenticationService, private router: Router) { }
     login() {

       if (this.credential.email !== '' && this.credential.password !== '') {
         this.auth.login(this.credential).subscribe(
          (data) => {
            console.log(data);
            if (data) {
              if (this.auth.getUserDetails().user_type === 'user') {
              this.router.navigateByUrl('/complain');
              } else {
                this.router.navigateByUrl('/admin');
                }
            } else {
               alert ('Invalid');
            }
          },
          err => {
              console.error(err);
          }
         );

        }

    }

}
