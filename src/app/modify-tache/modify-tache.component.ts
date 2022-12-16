import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Tache } from '../Tache';
import { TacheService } from '../tache.service';

@Component({
  selector: 'app-modify-tache',
  templateUrl: './modify-tache.component.html',
  styleUrls: ['./modify-tache.component.css']
})
export class ModifyTacheComponent {
  notesModForm!: FormGroup
  tache = new Tache
  private routeSub: Subscription | undefined
  submitted=false

  constructor(private tacheService: TacheService, private formBuilder :FormBuilder,private route: ActivatedRoute,private router:Router){
    this.createForm()
  }

  createForm(){
    this.notesModForm = this.formBuilder.group({
      title:['',Validators.required],
      description:['']
    })
  }

  modifyTache(tache:Tache){
    let userString= localStorage.getItem("user")
    if (userString){
      let user = JSON.parse(userString)
      if (user){
        this.tacheService.modifyTache(user.id,tache.id,tache).subscribe(data => {
          this.router.navigate(['taches'])
        });
      }
    }
    
  }

  ngOnInit(){
    this.submitted = true
    if (this.notesModForm.invalid) {
      return;
    }
    let userString= localStorage.getItem("user")
    if (userString){
      let user = JSON.parse(userString)
      if (user){
        this.routeSub = this.route.params.subscribe(params => {
          const id = params['id']
          this.tacheService.getTache(id).subscribe(datas =>{
            this.tache = datas as Tache;
           
          })
        });
      }
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.notesModForm.controls;
  }
}