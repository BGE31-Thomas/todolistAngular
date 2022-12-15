import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Tache } from "./Tache"
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root',
})
export class TacheService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_TACHES = "/taches/"

  readonly ENDPOINT_STATUS ="/status/"

  readonly ENDPOINT_USERS="/users/"

 

  constructor(private httpClient : HttpClient) {
    
  }
  
  getTaches(userId:number){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_USERS+userId+this.ENDPOINT_TACHES)
  }

  getTache(id:number){
    return this.httpClient.get(this.API_URL+this.ENDPOINT_TACHES+id)
  }

  addTache(id:number,tache:Tache): Observable<Tache> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  
   return this.httpClient.post<Tache>(this.API_URL+this.ENDPOINT_USERS+id+this.ENDPOINT_TACHES, tache,options)
      
   
  }

  modifyTache(userId:number,tacheId:number,tache:Tache): Observable<Tache> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  
   return this.httpClient.put<Tache>(this.API_URL+this.ENDPOINT_USERS+userId+this.ENDPOINT_TACHES+tacheId, tache,options)
      
   
  }

  deleteTache(tacheId:number){
  
   return this.httpClient.delete(this.API_URL+this.ENDPOINT_TACHES+tacheId)
      
  }
 
  modifyStatus(userId:number,tacheId:number,tache:Tache): Observable<Tache> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
   });
   let options = {
      headers: headers
   }
  
   return this.httpClient.put<Tache>(this.API_URL+this.ENDPOINT_STATUS+userId+"/"+tacheId, tache,options)
      
  }
}
