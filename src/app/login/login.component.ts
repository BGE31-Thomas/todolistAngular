import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../User.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: FormGroup; 
  submitted=false;
  user!: Utilisateur
  constructor(private formBuilder :FormBuilder,private userService:UserService,private router: Router){
    this.createForm()
  }

  //Crée le formulaire
  createForm(){
    this.loginForm = this.formBuilder.group({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])
    })
  }

  //Permet de se connecter
  connexion(){
    this.submitted = true
    if (this.loginForm.invalid) {
      return;
    }

    this.user = new Utilisateur
    this.user.email=this.loginForm.value.email
    this.user.password=this.loginForm.value.password
    this.userService.login(this.user).subscribe(
      data=>{
        
        if(data.email !=null){
          localStorage.setItem('user',JSON.stringify(data))
          this.router.navigate(['taches'])
        }
      }
    )
  }

  //Renvoie les propriétés du formulaire
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  //Renvoie vers le formulaire de création d'utilisateur
  toCreation(){
    this.router.navigate(['creationUser'])
  }

}
