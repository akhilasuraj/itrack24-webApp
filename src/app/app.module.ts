import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { LayoutModule } from '@angular/cdk/layout';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ComplainComponent } from './complain/complain.component';
import { ComplainService } from './complain/complain.service';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MapComponent } from './map/map.component';
import { MapService} from './map/map.service';
import { ResetPassTokenComponent } from './reset-pass-token/reset-pass-token.component';
import { PostComponent } from './post/post.component';
import { PostService } from './post/post.service';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedService } from './newsfeed/newsfeed.service';
import { MypostComponent } from './mypost/mypost.component';
import { MypostService } from './mypost/mypost.service';
import { MycomplainComponent } from './mycomplain/mycomplain.component';
import { MycomplainService } from './mycomplain/mycomplain.service';
import { ChartComponent } from './chart/chart.component';
import { ChartService } from './chart/chart.service';
import { NotificationComponent } from './notification/notification.component'
import { NotificationService } from './notification/notification.service';
import { PopPostComponent } from './pop-post/pop-post.component';
import { VerifyComponent } from './verify/verify.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarService } from './navbar/navbar.service';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddsupervisorComponent } from './admin/addsupervisor/addsupervisor.component';
import { AddsupervisorService } from './admin/addsupervisor/addsupervisor.service';
import { Navbar2Component } from './admin/navbar2/navbar2.component';
import { Navbar2Service} from './admin/navbar2/navbar2.service';
import { Notification2Component } from './admin/notification2/notification2.component';
import { Notification2Service} from './admin/notification2/notification2.service';
import { ApprovedComplainComponent } from './admin/approved-complain/approved-complain.component';
import { ApprovedComplainService } from './admin/approved-complain/approved-complain.service';
import { AuthService} from './admin/auth.service';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AddworkersComponent } from './admin/addworkers/addworkers.component';
import { AddworkersService } from './admin/addworkers/addworkers.service';
import { PopComplainComponent } from './pop-complain/pop-complain.component';
import { PiChartComponent } from './pi-chart/pi-chart.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RatingComponent } from './rating/rating.component';
import { RatingService } from './rating/rating.service';
import { EditpostComponent } from './editpost/editpost.component';






//
const routes: Routes = [
   { path: '', redirectTo: 'login', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: LoginComponent },
   {
      path: 'userprofile',
      component: UserprofileComponent,
      canActivate: [AuthGuardService]
   },
   { path: 'edit-profile', component: EditProfileComponent },
   { path: 'complain', component: ComplainComponent },
   { path: 'reset-password', component: ResetPasswordComponent },
   { path: 'map', component: MapComponent },
   { path: 'reset-pass-token', component: ResetPassTokenComponent },
   { path: 'post', component: PostComponent },
   { path: 'newsfeed', component: NewsfeedComponent },
   { path: 'mypost', component: MypostComponent },
   { path: 'mycomplain', component: MycomplainComponent },
   { path: 'chart', component: ChartComponent },
   { path: 'notification', component: NotificationComponent },
   { path: 'pop-post', component: PopPostComponent },
   { path: 'verify', component: VerifyComponent },
   { path: 'dashboard', component: DashboardComponent },
   { path: 'addsupervisor', component: AddsupervisorComponent },
   { path: 'notification2', component: Notification2Component},
   { path: 'approved-complain', component: ApprovedComplainComponent},
   { path: 'addworkers', component: AddworkersComponent},
   { path: 'pop-complain', component: PopComplainComponent},
   { path: 'pi-chart', component: PiChartComponent},
   { path: 'changepassword', component: ChangepasswordComponent},
   { path: 'rating', component: RatingComponent },
   { path: 'editablepost', component: EditpostComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      LoginComponent,
      RegisterComponent,
      EditProfileComponent,
      ComplainComponent,
      ResetPasswordComponent,
      MapComponent,
      ResetPassTokenComponent,
      PostComponent,
      NewsfeedComponent,
      MypostComponent,
      MycomplainComponent,
      ChartComponent,
      NotificationComponent,
      PopPostComponent,
      VerifyComponent,
      NavbarComponent,
      DashboardComponent,
      AddsupervisorComponent,
      Navbar2Component,
      Notification2Component,
      ApprovedComplainComponent,
      UserprofileComponent,
      AddworkersComponent,
      PopComplainComponent,
      PiChartComponent,
      ChangepasswordComponent,
      RatingComponent,
      EditpostComponent,
    
      
 

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
         apiKey:'AIzaSyBjTh5fhWEMqiDEtMYmmQyVfNYdvNcB39A',
         libraries: ['places']
       }),
      ChartsModule,
      MatCardModule,
      NgbModule

   ],
   providers: [
      AuthenticationService,
      AuthGuardService,
      ComplainService,
      PostService,
      NewsfeedService,
      MypostService,
      MycomplainService,
      ChartService,
      AppService,
      NotificationService,
      NavbarService,
      AddsupervisorService,
      Navbar2Service,
      Notification2Service,
      ApprovedComplainService,
      AuthService,
      AddworkersService,
      MapComponent,
      MapService,
      RatingService,
      RatingComponent

   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
