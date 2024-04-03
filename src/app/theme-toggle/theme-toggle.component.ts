import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [MatSlideToggleModule, RouterLink],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {
  }

}
