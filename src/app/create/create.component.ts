import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogueBodyComponent } from '../dialogue-body/dialogue-body.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
 standalone:true,
  imports: [MatButtonModule, MatDialogModule],
})
export class CreateComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogueBodyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
