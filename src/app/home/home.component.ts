import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from '../Tache';
import { TacheService } from '../tache.service';
import { Utilisateur } from '../Utilisateur';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title = 'todolist'
  taches: Tache[]=[]
  tache:Tache = new Tache

  constructor(private tacheService: TacheService, private route:Router){
    
  }

  toAddTache(){
    this.route.navigate(['add'])
  }
  
  toModifyTache(tache:Tache){
    console.log(tache)
    this.route.navigate(['modify',tache.id])
  }
  
  toDeleteTache(tache: Tache) {
    this.route.navigate(['delete',tache.id,tache.title])
  }

  modifyStatus(tache:Tache){
    let userString= localStorage.getItem("user")
    if (userString){
      let user = JSON.parse(userString)
      if (user){
        this.tacheService.modifyStatus(user.id,tache.id,tache).subscribe()
      }
    }
    
  }
  ngOnInit(){
    let userString= localStorage.getItem("user")
    if (userString){
      let user = JSON.parse(userString)
      console.log(user)
      if (user){
        this.tacheService.getTaches(user.id).subscribe(datas =>{
          this.taches = datas as Tache[];
          console.log(datas);
        })
      }
    }
    
    
    
    
    
    
   
  }
}
