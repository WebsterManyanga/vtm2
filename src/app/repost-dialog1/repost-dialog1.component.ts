import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { QuoteDialogComponent } from '../quote-dialog/quote-dialog.component';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-repost-dialog1',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './repost-dialog1.component.html',
  styleUrl: './repost-dialog1.component.scss',
})
export class RepostDialog1Component {
  constructor(public dialog: MatDialog, public themeService: ThemeService) {}

  openQuoteDialog() {
    const dialogRef = this.dialog.open(QuoteDialogComponent, {
      maxWidth: '100vw',
      width: '100%',
      height: '100vh',
      maxHeight: '100vh',
      position: { bottom: '0' },
    });

    dialogRef.afterClosed().subscribe((result) => {});
  }
}
