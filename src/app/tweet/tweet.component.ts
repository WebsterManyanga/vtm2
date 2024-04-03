import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Tweet } from '../tweet';
import { UserService } from '../user.service';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { RepostDialog1Component } from '../repost-dialog1/repost-dialog1.component';
import { TweetsService } from '../tweets.service';
import { Reply } from '../reply';

@Component({
  selector: 'app-tweet',
  standalone: true,
  imports: [MatIconModule, CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.scss',
})
export class TweetComponent implements OnInit {
  @Input() tweet: Tweet = new Tweet('me', 'hi', 0);
  userInfo: User = {
    name: '',
    username: '',
    bio: '',
    photo: '',
    created: '',
    headerPhoto: '',
    followers: [],
    following: [],
  };
  liked = false;
  likedBy = '';
  repost = false;
  timePassed = '';
  likeBtn = `ff`;

  constructor(
    private usersService: UserService,
    public dialog: MatDialog,
    public tweetsService: TweetsService
  ) {
    this.repost = this.tweet.reposts.find(
      (user) => user.username === this.usersService.userInfo.username
    )
      ? true
      : false;
  }

  like() {
    this.liked = this.tweetsService.addLike(this.tweet.id);
  }

  ngOnInit(): void {
    this.liked = this.tweet.likes.includes(this.usersService.userInfo.username);
    const i = this.usersService.OtherUsers.findIndex(
      (user) => user.username === this.tweet.userId
    );
    if (i !== -1) {
      this.userInfo = Object.assign({}, this.usersService.OtherUsers[i]);
    }
    this.likedBy = this.randomLike();
    this.timePassed = this.calculateTimeSince(this.tweet.date);
  }

  randomLike() {
    let i = Math.round(Math.random() * this.tweet.likes.length);
    let j = this.usersService.OtherUsers.findIndex(
      (user) => user.username === this.tweet.likes[i]
    );
    return j !== -1 ? this.usersService.OtherUsers[j].name : '';
  }

  openCommentDialog() {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      maxWidth: '100%',
      maxHeight: '100%',
      width: '100%',
      height: '100%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const i = this.tweetsService.tweets.findIndex(
          (tweet) => tweet === this.tweet
        );
        this.tweetsService.tweets[i].replies.push(
          new Reply(this.usersService.userInfo, result)
        );
      }
    });
  }

  openRepostDialog() {
    if (this.repost) {
      this.repost = false;
      const i = this.tweetsService.tweets.findIndex(
        (tweet) => tweet.id === this.tweet.id
      );
      this.tweetsService.deleteRepost(i);

      return;
    }
    const dialogRef = this.dialog.open(RepostDialog1Component, {
      maxWidth: '100%',
      width: '100%',
      position: { bottom: '0' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.repost = true;
        const i = this.tweetsService.tweets.findIndex(
          (tweet) => tweet.id === this.tweet.id
        );
        this.tweetsService.tweets[i].reposts.push(this.usersService.userInfo);
      }
    });
  }

  calculateTimeSince(dateCreated: Date): string {
    const now = new Date();
    const diffInMilliseconds = now.getTime() - dateCreated.getTime();
    const diffInSeconds = diffInMilliseconds / 1000;
    const diffInMinutes = diffInSeconds / 60;
    const diffInHours = diffInMinutes / 60;
    const diffInDays = diffInHours / 24;
    const diffInWeeks = diffInDays / 7;
    const diffInYears = diffInDays / 365;

    if (diffInYears >= 1) {
      return `${Math.floor(diffInYears)} y`;
    } else if (diffInWeeks >= 1) {
      return `${Math.floor(diffInWeeks)}w`;
    } else if (diffInDays >= 1) {
      return `${Math.floor(diffInDays)}d`;
    } else if (diffInHours >= 1) {
      return `${Math.floor(diffInHours)}h`;
    } else {
      return `${Math.floor(diffInMinutes)}m`;
    }
  }
}
