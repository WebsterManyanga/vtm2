import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  constructor(public themeService: ThemeService) {}

}
