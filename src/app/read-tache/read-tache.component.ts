import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Tache } from '../Tache';
import { TacheService } from '../tache.service';

@Component({
  selector: 'app-read-tache',
  templateUrl: './read-tache.component.html',
  styleUrls: ['./read-tache.component.css']
})
export class ReadTacheComponent {
  tache = new Tache
  private routeSub: Subscription | undefined
  

  constructor(private tacheService: TacheService, private formBuilder :FormBuilder,private route: ActivatedRoute,private router:Router){
    
  }

  //Renvoie vers la liste de tâches
  toList(){
    this.router.navigate(['taches'])
  }

  //Renvoie vers le formulaire pour modifier une tâche (tâche à modifier)
  toModifyTache(tache:Tache){
    this.router.navigate(['modify',tache.id])
  }
  
  //Renvoie vers le template pour supprimer une tâche (tâche à supprimer)
  toDeleteTache(tache: Tache) {
    this.router.navigate(['delete',tache.id,tache.title])
  }

//Se lance à l'initialisation du composant
  ngOnInit(){
  
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
}
