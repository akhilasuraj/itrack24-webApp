import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './dashboard.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  comp;
  post;

  postData = {
    id: 0
  }

  compData = {
    id: 0
  }

  marked = true;

  constructor(private ds: DashboardService, private router: Router) { }

  ngOnInit() {
    this.ds.getComplains().subscribe(
      (dataC) => {

        this.comp = dataC;
        console.log(dataC);
      });

    this.ds.getPosts().subscribe(
      (dataP) => {
        this.post = dataP;
        console.log(dataP);
      });
  }

  ViewMore1(id: number) {
    this.marked = false;
    this.compData.id = id;
    console.log(this.compData.id);
};

  ViewMore2(id: number) {
    this.marked = false;
    this.postData.id = id;
    console.log(this.postData.id);
};



}
