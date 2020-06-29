import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEtudiantRoutingModule } from './dashboard-etudiant-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterComponent } from './demandes/ajouter/ajouter.component';
import { ConsulterComponent } from './demandes/consulter/consulter.component';
import { AfficherComponent } from './demandes/afficher/afficher.component';


@NgModule({
  declarations: [DashboardComponent, AjouterComponent, ConsulterComponent, AfficherComponent],
  imports: [
    CommonModule,
    DashboardEtudiantRoutingModule
  ]
})
export class DashboardEtudiantModule { }
