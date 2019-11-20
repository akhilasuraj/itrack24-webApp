import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Navbar2Service } from './navbar2.service';
import { AuthService} from '../auth.service';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements CanActivate {

  countc;
  countp;

  constructor(private ns2: Navbar2Service, private router: Router, private au:AuthService) { }

  canActivate(): boolean {
    if (!this.au.isLoggedIn()) {
       this.router.navigateByUrl('/login');
       return false;
    }
    return true;
  }

  ngOnInit() {
    this.ns2.getcompCount().subscribe(
      (data1) => {
        this.countc = data1;
        console.log("this is complain count = "+this.countc);
      });

    this.ns2.getpostCount().subscribe(
      (data2) => {
        this.countp = data2;
        console.log("this is post count = "+this.countp);
      });
  }

}

