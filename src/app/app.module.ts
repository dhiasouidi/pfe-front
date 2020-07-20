import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthentificationService } from './services/authentification.service';
import { DemandeEtudiantService } from './services/demande-etudiant.service';
import { EtudiantService } from './services/etudiant.service';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthentificationService,DemandeEtudiantService,EtudiantService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
