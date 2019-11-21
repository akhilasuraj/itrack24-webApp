import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ApprovedComplainService} from './approved-complain.service'

@Component({
  selector: 'app-approved-complain',
  templateUrl: './approved-complain.component.html',
  styleUrls: ['./approved-complain.component.css']
})
export class ApprovedComplainComponent implements OnInit {

comp;
moredata;

compdata = {
  complainID:0
}

marked;

  constructor(private as:ApprovedComplainService, private router:Router ) { }

  ngOnInit() {
   this.as.progressingComplains().subscribe(
     data=>{
       this.marked =true;
        this.comp = data;
        console.log(this.comp);
     });
  }
  
  ViewMore(complainID: number){
   this.compdata.complainID = complainID;
   this.as.getMoredetails(this.compdata).subscribe(
     (data)=>{
        this.moredata = data;
        this.marked = false;
        console.log(this.moredata);
     })

  }
  
  back(){
    this.marked = true;
  }

  

}
