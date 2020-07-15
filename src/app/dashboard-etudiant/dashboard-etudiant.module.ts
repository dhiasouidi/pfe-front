import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardEtudiantRoutingModule } from './dashboard-etudiant-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterComponent } from './demandes/ajouter/ajouter.component';
import { ConsulterComponent } from './demandes/consulter/consulter.component';
import { AfficherComponent } from './demandes/afficher/afficher.component';
import { DeposerComponent } from './soutenance/deposer/deposer.component';
import { ModifierComponent } from './profile/modifier/modifier.component';
import { ChangerMdpComponent } from './profile/changer-mdp/changer-mdp.component';
import { ImprimerComponent } from './demandes/imprimer/imprimer.component';
import { JournalComponent } from './documentation/journal/journal.component';
import { ConventionComponent } from './documentation/convention/convention.component';
import { LettreaffectationComponent } from './documentation/lettreaffectation/lettreaffectation.component';
import { AcceuilEtudiantComponent } from './dashboard/acceuil-etudiant/acceuil-etudiant.component';
import { ConsulterSujetComponent } from './sujet/consulter-sujet/consulter-sujet.component';
import { ConsulterStageComponent } from './stage/consulter-stage/consulter-stage.component';
import { CompleterInfoStageComponent } from './stage/completer-info-stage/completer-info-stage.component';
import { ConsulterProfileComponent } from './profile/consulter-profile/consulter-profile.component';
import { OverviewProfileComponent } from './profile/overview-profile/overview-profile.component';


@NgModule({
  declarations: [DashboardComponent,AjouterComponent, ConsulterComponent, AfficherComponent, DeposerComponent, ModifierComponent, ChangerMdpComponent, ImprimerComponent, JournalComponent, ConventionComponent, LettreaffectationComponent, AcceuilEtudiantComponent, ConsulterSujetComponent, ConsulterStageComponent, CompleterInfoStageComponent, ConsulterProfileComponent, OverviewProfileComponent],
  imports: [
    CommonModule,
    DashboardEtudiantRoutingModule,
    FormsModule
  ]
})
export class DashboardEtudiantModule { }
