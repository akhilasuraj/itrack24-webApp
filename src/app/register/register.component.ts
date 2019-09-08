import { Component, OnInit } from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { EmailValidator } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['register.component.css'],
})
export class RegisterComponent {
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

  register() {
    this.auth.register(this.credential).subscribe(
      (data) => {
        if (data) {
          console.log(data);
          // this.router.navigateByUrl('');
        }
        else {
          alert('invalid');
        }
      },
    )
  };

}




