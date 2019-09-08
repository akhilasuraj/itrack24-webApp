import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  token: ''
  email:''

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      res => {
        this.token = res.token;
        this.email = res.email;
        console.log(this.token + "& " + this.email);
      });

    this.auth.verification(this.token, this.email).subscribe(
      data=>{ 
          console.log("login here " + data);
          this.router.navigateByUrl("/login");
      });
  }

}
