import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss'
})
export class ListsComponent {
  constructor(public themeService: ThemeService) {
    
  }

}
