import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Tache } from "./Tache"
import { Observable } from 'rxjs/internal/Observable';
import { Utilisateur } from './Utilisateur';


@Injectable({
  providedIn: 'root',
})
export class UserService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_TACHES = "/taches"

  readonly ENDPOINT_TACHE = "/tache/"

  readonly ENDPOINT_STATUS ="/status/"

  readonly ENDPOINT_USERS = "/users"

  readonly LOGIN = "/login"

 

  constructor(private httpClient : HttpClient) {
    
  }
  
  login(user:Utilisateur): Observable<Utilisateur> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  
   return this.httpClient.post<Utilisateur>(this.API_URL+this.LOGIN, user,options)
      
   
  }

  getTache(id:number){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_TACHE+id)
  }

  addTache(tache:Tache): Observable<Tache> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  
   return this.httpClient.post<Tache>(this.API_URL+this.ENDPOINT_TACHES, tache,options)
      
   
  }

  modifyTache(id:number,tache:Tache): Observable<Tache> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  
   return this.httpClient.put<Tache>(this.API_URL+this.ENDPOINT_TACHE+id, tache,options)
      
   
  }

  deleteTache(id:number){
  
   return this.httpClient.delete(this.API_URL+this.ENDPOINT_TACHE+id)
      
  }

  modifyStatus(id:number,tache:Tache): Observable<Tache> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  
   return this.httpClient.put<Tache>(this.API_URL+this.ENDPOINT_STATUS+id, tache,options)
      
  }
}