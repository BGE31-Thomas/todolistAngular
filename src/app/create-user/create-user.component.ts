import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../User.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  creationForm!: FormGroup; 
  submitted=false;
  user!: Utilisateur
  constructor(private formBuilder :FormBuilder,private userService:UserService,private router: Router){
    this.createForm()
  }

  createForm(){
    this.creationForm = this.formBuilder.group({
      name:new FormControl('',[Validators.required,Validators.minLength(2)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
    })
  }

  enregistrer(){
    this.submitted = true
    if (this.creationForm.invalid) {
      return;
    }

    this.user = new Utilisateur
    this.user.name = this.creationForm.value.name
    this.user.email=this.creationForm.value.email
    this.user.password=this.creationForm.value.password
    this.userService.enregistrement(this.user).subscribe(
      data=>{
        
        if(data.email !=null){
          this.router.navigate([''])
        }
      }
    )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.creationForm.controls;
  }

  toCreation(){
    this.router.navigate(['creationUser'])
  }

}
