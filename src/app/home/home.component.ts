import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SortUtil } from '../SortUtil';
import { Tache } from '../Tache';
import { TacheService } from '../tache.service';


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

  //Rnvoie vers le formulaire pour créer une nouvelle tâche
  toAddTache(){
    this.route.navigate(['add'])
  }
  
  //Renvoie vers le formulaire pour modifier une tâche (tâche récupérée du formulaire)
  toModifyTache(tache:Tache){
    this.route.navigate(['modify',tache.id])
  }
  
  //Renvoie vers le template de suppression
  toDeleteTache(tache: Tache) {
    this.route.navigate(['delete',tache.id,tache.title])
  }

  //Renvoie vers le template pour modifier une tâche (tâche récupérée du formulaire)
  toReadTache(tache:Tache){
    let userString= localStorage.getItem("user")
    if (userString){
      let user = JSON.parse(userString)
      if (user){
        this.route.navigate(['read',tache.id])
      }
    }
  }

  //MOdifie le statut de la tâche (tâche cochée)
  modifyStatus(tache:Tache){
    let userString= localStorage.getItem("user")
    if (userString){
      let user = JSON.parse(userString)
      if (user){
        this.tacheService.modifyStatus(user.id,tache.id,tache).subscribe(
          data=>{
            this.geTachesByStatus()
          })
      }
    }
    
  }
  ngOnInit(){
    this.geTachesByStatus()
  } 

  geTachesByStatus(){
    let userString= localStorage.getItem("user")
    if (userString){
      let user = JSON.parse(userString)
      if (user){
        this.tacheService.getTaches(user.id).subscribe(datas =>{
          this.taches = datas as Tache[];
          SortUtil.sortByProperty(this.taches,"status","ASC")
        })
      }
    } 
  }
}
