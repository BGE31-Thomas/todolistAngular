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

  enregistrement(user:Utilisateur): Observable<Utilisateur> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  
   return this.httpClient.post<Utilisateur>(this.API_URL+this.ENDPOINT_USERS, user,options)
      
  }

  
}