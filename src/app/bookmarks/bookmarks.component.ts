import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-bookmarks',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule, RouterLink],
  templateUrl: './bookmarks.component.html',
  styleUrl: './bookmarks.component.scss'
})
export class BookmarksComponent {
  constructor(public themeService: ThemeService) {}

}
