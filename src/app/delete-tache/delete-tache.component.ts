import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatConfirmComponent } from '../ng-material/mat-confirm/mat-confirm.component';
import { TacheService } from '../tache.service';

@Component({
  selector: 'app-delete-tache',
  templateUrl: './delete-tache.component.html',
  styleUrls: ['./delete-tache.component.css']
})
export class DeleteTacheComponent {
  private routeSub: Subscription | undefined

  constructor(private tacheService: TacheService, private route: ActivatedRoute,private router:Router, private dialog: MatDialog){
    
  }
  
  confirmDialog(ident:number,title:String) {
    const ref: MatDialogRef<MatConfirmComponent> =  
    this.dialog.open(MatConfirmComponent, {
   
      data: {
        id:ident,
        message: 'Êtes-vous sûr.e de vouloir supprimer la tâche '+title+' ?'
      },
      backdropClass: 'confirmDialogComponent',
      hasBackdrop: true
    });
  }
 
  ngOnInit(){
    let userString= localStorage.getItem("user")
    if (userString){
      let user = JSON.parse(userString)
      if (user){
        this.routeSub = this.route.params.subscribe(params => {
          const id = params['id']
          const titre = params['titre']
          this.confirmDialog(id,titre)
        })  
      }
    }
  }
}
