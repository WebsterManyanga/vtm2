import { Component, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TweetsPageComponent } from './tweets-page/tweets-page.component';
import { SearchComponent } from './search/search.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesComponent } from './messages/messages.component';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
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
    MessagesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Twitter kinda';

}
