import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tache } from '../Tache';
import { TacheService } from '../tache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-tache',
  templateUrl: './new-tache.component.html',
  styleUrls: ['./new-tache.component.css']
})
export class NewTacheComponent {
  notesForm!: FormGroup
  tache = new Tache
  submitted=false

  constructor(private tacheService: TacheService, private formBuilder :FormBuilder,private router: Router){
    this.createForm()
  }

  //Crée le formulaire
  createForm(){
    this.notesForm = this.formBuilder.group({
      title:['',Validators.required],
      description:['']
    })
  }

  //Renvoie vers la liste de tâches
  toList(){
    this.router.navigate(['taches'])
  }

  //Permet d'ajouter une nouvelle tâche
  addTacheForm(){
    this.submitted = true
    if (this.notesForm.invalid) {
      return;
    }
    let userString= localStorage.getItem("user")
    if (userString){
      let user = JSON.parse(userString)
      if (user){
        this.tache = new Tache
        this.tache.title = this.notesForm.value.title
        this.tache.description =this.notesForm.value.description
        this.tacheService.addTache(user.id,this.tache).subscribe(data => {
          this.router.navigate(['taches'])
        });
      }
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.notesForm.controls;
  }

 
}
