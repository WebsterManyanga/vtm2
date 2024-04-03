import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-tweeting',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './tweeting.component.html',
  styleUrl: './tweeting.component.scss'
})
export class TweetingComponent {

}
