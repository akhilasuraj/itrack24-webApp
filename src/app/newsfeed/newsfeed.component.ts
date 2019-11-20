import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsfeedService } from './newsfeed.service';
import { AuthenticationService} from '../authentication.service';
import { switchMap } from 'rxjs/operators';
import * as socketIo from 'socket.io-client';
import { Subscription, timer, pipe } from 'rxjs';



@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  postdata;
  subcription1;

  userID;
  likedata = {
    userID: this.userID,
    postID: 0
  };

  likedposts;
  likedstatus = false;

  currentUrl;

  constructor(private nf: NewsfeedService, private route: Router, private auth: AuthenticationService) { }

  ngOnInit() {
    this.currentUrl = this.route.url;
    this.nf.getPost().subscribe(
      result => {
        this.postdata = result;
        console.log(this.postdata);
      });

      this.likedata.userID = this.auth.getUserDetails().id;

      this.getLikes();
  
  }

  
  onPostLikeClick(post) {
    console.log('postID' + post.id);
    this.likedata.postID = post.id;
    this.addLike();
    location.reload();

  }
  
  onPostDislikeClick(post) {
    console.log('postID' + post.id);
    this.likedata.postID = post.id;
    this.removeLike();
    location.reload();

  }


  addLike() {
    this.nf.AddLike(this.likedata).subscribe(
      result => {
        console.log(result);
      });

  }
  removeLike() {
    this.nf.RemoveLike(this.likedata).subscribe(
      result => {
        console.log(result);
      });

  }

  getLikes() {
    this.nf.GetLikes(this.likedata).subscribe(
      result => {
        this.likedposts = result;
        console.log(this.likedposts);
      });
  }

  // check if post is already liked
  likedStatus(status) {
    this.likedstatus = status;
  }


}
