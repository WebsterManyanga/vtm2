import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';
@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [MatSlideToggleModule, MatIconModule, MatMenuModule, RouterLink],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  constructor(public themeService: ThemeService) {}
}
