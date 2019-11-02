import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApprovedComplainService} from './approved-complain.service'

@Component({
  selector: 'app-approved-complain',
  templateUrl: './approved-complain.component.html',
  styleUrls: ['./approved-complain.component.css']
})
export class ApprovedComplainComponent implements OnInit {

details;
compDetail={
  category:''
}
supervisor;
  constructor(private as:ApprovedComplainService, private router:Router ) { }

  ngOnInit() {
    this.as.GetComplains().subscribe(
      (res)=>{
        this.details = res;
        console.log(this.details);
      });
  }

  AddSupervisor(category){
    this.compDetail.category = category;
    this.as.SelectSupervisor(this.compDetail).subscribe(
      (data)=>{
         console.log(data);
         this.supervisor = data;
      });
  }

  

}
