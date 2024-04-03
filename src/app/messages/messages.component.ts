import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { HeaderComponent } from '../header/header.component';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [MessageComponent, HeaderComponent],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent {
  constructor(public themeService: ThemeService) {}
}
