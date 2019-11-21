import { Component, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Navbar2Service } from './navbar2.service';
import { AuthService} from '../auth.service';
import * as socketIo from 'socket.io-client';
import { Subscription, timer, pipe } from 'rxjs';
import { switchMapTo, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements CanActivate {

  countc;
  countp;

  subscription1;
  subscription2;

  constructor(private ns2: Navbar2Service, private router: Router, private au:AuthService) { }

  canActivate(): boolean {
    if (!this.au.isLoggedIn()) {
       this.router.navigateByUrl('/login');
       return false;
    }
    return true;
  }

  ngOnInit() {
    
    // this.subscription1 = timer(0,10000).pipe(
    //   switchMap(()=>
      this.ns2.getcompCount().subscribe(
      (data1) => {
        this.countc = data1;
        console.log("this is complain count = "+this.countc);
      });
    
      
      // this.subscription2 = timer(0,10000).pipe(
      //   switchMap(()=>
        this.ns2.getpostCount().subscribe(
      (data2) => {
        this.countp = data2;
        console.log("this is post count = "+this.countp);
      });
  }

  
  // ngOnDestroy(){
  //   this.subscription1.unsubscribe()
  //   this.subscription2.unsubscribe()
  // }


}

