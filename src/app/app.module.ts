import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTacheComponent } from './new-tache/new-tache.component';
import { ModifyTacheComponent } from './modify-tache/modify-tache.component';
import { HomeComponent } from './home/home.component';
import { DeleteTacheComponent } from './delete-tache/delete-tache.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { LoginComponent } from './login/login.component';
import { CreateUserComponent } from './create-user/create-user.component';
@NgModule({
  declarations: [
    AppComponent,
    NewTacheComponent,
    ModifyTacheComponent,
    HomeComponent,
    DeleteTacheComponent,
    LoginComponent,
    CreateUserComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    NgMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
