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
        // window.location.reload();
        console.log(data);
      });
  }

}
