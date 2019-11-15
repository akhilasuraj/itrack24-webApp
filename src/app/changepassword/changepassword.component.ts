
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private auth: AuthenticationService, private router: Router) { }

  userData = {
    id: 0,
    password: '',
    newpassword: '',
    confermpassword: ''
  }

  pass;
  marked = true;


  ngOnInit() {
    this.userData.id = this.auth.getUserDetails().id;
  }

  SubmitCurrentPassword() {
    this.auth.getPassword(this.userData).subscribe(
      (data) => {
        if (data.message1) {
          console.log("correct password");
          this.marked = false;
        }
        else if (data.message2) {
          window.alert("Incorrect password");
          this.userData.password = "";
        }
      });
  }

  ChangePassword() {
    if (this.userData.newpassword == this.userData.confermpassword) {
      this.auth.changePassword(this.userData).subscribe(
        (result) => {
          this.marked = true;
          window.alert(result.message);
          this.userData.confermpassword = "";
          this.userData.newpassword = ""
          this.userData.password = ""
        });
    }
    else {
      window.alert("Password missmatched");
    }

  }




}
