import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-quote-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './quote-dialog.component.html',
  styleUrl: './quote-dialog.component.scss'
})
export class QuoteDialogComponent {
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

  constructor(private userService: UserService) {
    Object.assign(this.user, userService.userInfo);
  }

  validateReply(reply: string) {
    this.disableButton = !reply;
    return this.disableButton;
  }
}
