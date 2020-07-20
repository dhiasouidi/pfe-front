import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardEtudiantRoutingModule } from './dashboard-etudiant-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterComponent } from './demandes/ajouter/ajouter.component';
import { ConsulterComponent } from './demandes/consulter/consulter.component';
import { ModifierComponent } from './profile/modifier/modifier.component';
import { ChangerMdpComponent } from './profile/changer-mdp/changer-mdp.component';
import { JournalComponent } from './documentation/journal/journal.component';
import { ConventionComponent } from './documentation/convention/convention.component';
import { LettreaffectationComponent } from './documentation/lettreaffectation/lettreaffectation.component';
import { AcceuilEtudiantComponent } from './dashboard/acceuil-etudiant/acceuil-etudiant.component';
import { ConsulterSujetComponent } from './sujet/consulter-sujet/consulter-sujet.component';
import { ConsulterStageComponent } from './stage/consulter-stage/consulter-stage.component';
import { CompleterInfoStageComponent } from './stage/completer-info-stage/completer-info-stage.component';
import { ConsulterProfileComponent } from './profile/consulter-profile/consulter-profile.component';
import { OverviewProfileComponent } from './profile/overview-profile/overview-profile.component';
import { ReclamerComponent } from './reclamer/reclamer.component';
import { DepotComponent } from './depot/depot.component';
import { SoutenanceComponent } from './soutenance/soutenance.component';
import { AjouterBinomeComponent } from './sujet/binome/ajouter-binome/ajouter-binome.component';
import { AfficherBinomeComponent } from './sujet/binome/afficher-binome/afficher-binome.component';
import { AjouterEncadrantComponent } from './sujet/encadrant/ajouter-encadrant/ajouter-encadrant.component';
import { AfficherEncadrantComponent } from './sujet/encadrant/afficher-encadrant/afficher-encadrant.component';


@NgModule({
  declarations: [DashboardComponent,AjouterComponent, ConsulterComponent,  SoutenanceComponent, ModifierComponent, ChangerMdpComponent, JournalComponent, ConventionComponent, LettreaffectationComponent, AcceuilEtudiantComponent, ConsulterSujetComponent, ConsulterStageComponent, CompleterInfoStageComponent, ConsulterProfileComponent, OverviewProfileComponent, ReclamerComponent, DepotComponent, AjouterBinomeComponent, AfficherBinomeComponent, AjouterEncadrantComponent, AfficherEncadrantComponent],
  imports: [
    CommonModule,
    DashboardEtudiantRoutingModule,
    FormsModule
  ]
})
export class DashboardEtudiantModule { }
