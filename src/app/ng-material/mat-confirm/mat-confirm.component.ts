import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TacheService } from '../../tache.service';
@Component({
  selector: 'app-mat-confirm',
  templateUrl: './mat-confirm.component.html',
  styleUrls: ['./mat-confirm.component.css']
})
export class MatConfirmComponent {
  id=0;
  message = '';

  constructor(
    private tacheService: TacheService,
    private dialogRef: MatDialogRef<MatConfirmComponent>,
    private router:Router,
    @Inject(MAT_DIALOG_DATA) data: { id:number,message: string }) {  
      this.id = data ? data.id : 0
      this.message = data ? data.message : '';
    }

    confirmer(id:number){
      let userString= localStorage.getItem("user")
      if (userString){
      let user = JSON.parse(userString)
        if (user){
          this.tacheService.deleteTache(id).subscribe(data=>
            this.router.navigate(['taches']))
          
        } 
      }
     
    }

    annuler(){
      this.router.navigate(['taches'])
    }
}
