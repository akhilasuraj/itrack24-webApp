import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
//
import {ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';


import { AppComponent } from './app.component';
import { ProfileComponent  } from './profile/profile.component';
import { LoginComponent  } from './login/login.component';
import { RegisterComponent  } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { LayoutModule } from '@angular/cdk/layout';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ComplainComponent } from './complain/complain.component';
import { ComplainService} from './complain/complain.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MapComponent } from './map/map.component';
import {AgmCoreModule} from '@agm/core'

//

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'complain', component: ComplainComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'map', component: MapComponent}

];

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ProfileComponent,
      LoginComponent,
      RegisterComponent,
      EditProfileComponent,
      ComplainComponent,
      DashboardComponent,
      ResetPasswordComponent,
      MapComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      LayoutModule,
      MatInputModule,
      ReactiveFormsModule,
      AgmCoreModule.forRoot({
         apiKey:'AIzaSyCy3YWkcSF7UpkpFx9sDoAH3RegR1HGUE0'
      })
   ],
   providers: [
      AuthenticationService,
      AuthGuardService,
      ComplainService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
