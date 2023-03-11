import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-work-z',
  templateUrl: './work-z.component.html',
  styleUrls: ['./work-z.component.scss']
})
export class WorkZComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogBox, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
})
export class DialogBox {
  constructor(public dialogRef: MatDialogRef<DialogBox>) {}
}
