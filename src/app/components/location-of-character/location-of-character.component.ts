import { Component, OnInit } from '@angular/core';
import {DialogOverviewExampleDialogComponent} from '../../pages/settings-page/settings-page.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-location-of-character',
  templateUrl: './location-of-character.component.html',
  styleUrls: ['./location-of-character.component.css']
})
export class LocationOfCharacterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogDelete() {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      height: '25%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogEdit() {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      height: '55%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-dialog-edit',
  templateUrl: 'dialog-edit.html',
  styleUrls: ['location-of-character.component.css']
})
export class DialogEditComponent {}
