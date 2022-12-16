import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DeleteTacheComponent } from './delete-tache/delete-tache.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ModifyTacheComponent } from './modify-tache/modify-tache.component';
import { NewTacheComponent } from './new-tache/new-tache.component';
import { ReadTacheComponent } from './read-tache/read-tache.component';

//Routes utilisées
const routes:  Routes = [
  {path: '',component:LoginComponent},
  {path: 'taches',component:HomeComponent},
  {path: 'add',component:NewTacheComponent},
  {path: 'modify/:id', component:ModifyTacheComponent},
  {path: 'delete/:id/:titre', component:DeleteTacheComponent},
  {path:"creationUser",component:CreateUserComponent},
  {path:"read/:id",component:ReadTacheComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 
}
