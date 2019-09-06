import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  message: string;

  constructor(private activatedRoute: ActivatedRoute, private auth: AuthenticationService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(ref => {
      this.token = ref.token;
      console.log(this.token);
    });
  }
  
  submit(){
    console.log(this.pass+' '+this.confPass);
    if(this.pass!==this.confPass){
      this.message = 'Password mismatched';
    }else{
      this.auth.resetPasswordWithToken(this.token,this.pass).subscribe(res=>{
        console.log(res);
      })
    }
  }

}
