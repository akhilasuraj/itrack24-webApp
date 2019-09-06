import { Component, OnInit} from '@angular/core'
import { AuthenticationService, TokenPayload } from '../authentication.service'
import { Router } from '@angular/router'
import { EmailValidator } from '@angular/forms';

@Component ({
    templateUrl: './register.component.html',
    styleUrls: ['register.component.css'],
})
export class RegisterComponent {
   credential: TokenPayload = {
         id: 0,
         user_type: 'user',
         first_name: '',
         last_name: '',
         address:  '',
         contact_num: '',
         email: '',
         password: '',
         profilepic:''
        
   };

//    user_Data = {
//     user_ID: 0
//  };
//    SelectedFile: File = null;
//    fileUrl;
    constructor(private auth: AuthenticationService, private router: Router) { }
    
    register() {
         this.auth.register(this.credential).subscribe(
          (data) => {
            if(data) {
              console.log("hello");
              this.router.navigateByUrl('/profile');
            }
            else{
              alert('invalid');
            }
          },
         )
          };

          // OnFileSelected(event){
          
          //   this.SelectedFile =  event.target.files[0] as File;
            
          // }

          // Upload(){
          //     console.log('hi upload')
          //   this.user_Data.user_ID = this.auth.getUserDetails().id;
          //   const fd = new FormData();
          //   fd.append('profileimg', this.SelectedFile, this.SelectedFile.name);
          //   this.auth.uploadPhoto(fd).subscribe(
          //     data => {
          //          console.log('image upload success');
          //     }
          //   );
  
          //   window.location.reload();
          // }


}




