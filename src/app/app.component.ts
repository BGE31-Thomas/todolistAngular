import { Component } from '@angular/core';
import { TacheService } from './tache.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatConfirmComponent } from './ng-material/mat-confirm/mat-confirm.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TacheService]
})

export class AppComponent {

  title = 'todolist'

  constructor(public dialog: MatDialog){

  }

  
  
}



