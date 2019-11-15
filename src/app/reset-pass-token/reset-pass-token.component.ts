import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-reset-pass-token',
  templateUrl: './reset-pass-token.component.html',
  styleUrls: ['./reset-pass-token.component.css']
})
export class ResetPassTokenComponent implements OnInit {
  token: string;
  pass = '';
  confPass = '';


  constructor(private activatedRoute: ActivatedRoute, private auth: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(ref => {
      this.token = ref.token;
      console.log(this.token);
    });
  }

  submit() {
    console.log(this.pass + ' ' + this.confPass);
    if (this.pass !== this.confPass) {
      window.alert("Passwords missmatched");
    } else {
      this.auth.resetPasswordWithToken(this.token, this.pass).subscribe
        (res => {
          if (res.message8) {
            window.alert(res.message8);
            console.log("succesfully reseted");
            this.router.navigateByUrl("/login");
          }
          else if (res.message9) {
            window.alert(res.message9);
            console.log("session expired");
            this.router.navigateByUrl("/login");
          }
        });
    }
  }



}
