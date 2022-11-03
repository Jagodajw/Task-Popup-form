import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';


export interface DialogData {
  name: string;
  age: number;

}

export interface SelectInterface {
  Id: string;
  Name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '350px',
      // data: {name: this.name, age: this.age},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      // this.age = result;
    });
  }
  ngOnInit(): void {
  }

}
