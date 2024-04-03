import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MessagesComponent } from '../messages/messages.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { SearchComponent } from '../search/search.component';
import { TweetsPageComponent } from '../tweets-page/tweets-page.component';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatIconModule,
    HeaderComponent,
    MatTabsModule,
    TweetsPageComponent,
    SearchComponent,
    NotificationsComponent,
    MessagesComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public themeService: ThemeService) {
    
  }

}
