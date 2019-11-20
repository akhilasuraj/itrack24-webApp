import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddsupervisorService} from './addsupervisor.service';

@Component({
  selector: 'app-addsupervisor',
  templateUrl: './addsupervisor.component.html',
  styleUrls: ['./addsupervisor.component.css']
})
export class AddsupervisorComponent implements OnInit {

  credential = {
    firstname: '',
    lastname: '',
    contactno: '',
    email: '',
    password: '',
    jobcategory1: '',
    jobcategory2: '',
    availability: true

  }

  constructor(private router: Router, private as: AddsupervisorService) { }

  ngOnInit() {}

  Register() {
    this.as.AddSupervisor(this.credential).subscribe(
      (data) => {
        if(data.message1){
          window.alert(data.message1);
          this.credential.firstname = "";
          this.credential.lastname = "";
          this.credential.contactno = "";
          this.credential.email = "";
          this.credential.password = "";
          this.credential.jobcategory1 = "";
          this.credential.jobcategory2 = ""
        }

        else if(data.message2){
          window.alert(data.message2);
        }
      
      });
  }

}
