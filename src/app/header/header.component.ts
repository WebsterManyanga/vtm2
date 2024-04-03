import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatSidenavModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showMenu = false;
  user: User = {
    name: '',
    username: '',
    bio: '',
    photo: '',
    headerPhoto: '',
    created: '',
    following: [],
    followers: [],
  };

  @Input() headerTitle = `<div class='w-10'><img
  src="../assets/Twitter Logo.png"
  class="w-full"
  alt="twitter logo"
/></div>`;

  constructor(private userService: UserService, public themeService: ThemeService) {
    this.user = { ...userService.userInfo };
  }
}
