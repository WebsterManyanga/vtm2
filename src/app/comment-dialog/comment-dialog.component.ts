import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { User } from '../user';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-comment-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './comment-dialog.component.html',
})
export class CommentDialogComponent {
  user:User = {
    name: '',
    username: '',
    bio: '',
    photo: '',
    created: '',
    headerPhoto: '',
    following: [],
    followers: []
  }

  disableButton = true;

  constructor(private userService: UserService, public themeService: ThemeService) {
    Object.assign(this.user, userService.userInfo);
  }

  validateReply(reply: string) {
    this.disableButton = !reply;
    return this.disableButton;
  }
}
