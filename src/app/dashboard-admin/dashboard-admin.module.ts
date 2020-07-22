import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceuilAdminComponent } from './dashboard/acceuil-admin/acceuil-admin.component';
import { ConsulterDemandesComponent } from './demandes/consulter-demandes/consulter-demandes.component';
import { ConsulterProfileComponent } from './profile/consulter-profile/consulter-profile.component';
import { ChangerMdpComponent } from './profile/changer-mdp/changer-mdp.component';
import { ModifierComponent } from './profile/modifier/modifier.component';
import { ConsulterListeComponent } from './etudiants/consulter-liste/consulter-liste.component';
import { ConsulterListeEnseignantsComponent } from './enseignant/consulter-liste-enseignants/consulter-liste-enseignants.component';
import { ModifierEtudiantComponent } from './etudiants/modifier/modifier-etudiant/modifier-etudiant.component';
import { ModifierEnseignantComponent } from './enseignant/modifier/modifier-enseignant/modifier-enseignant.component';
import { AjouterComponent } from './etudiants/ajouter/ajouter.component';
import { ConsulterComponent } from './soutenances/consulter/consulter.component';
import { AffecterComponent } from './soutenances/affecter/affecter.component';
import { ParametresComponent } from './parametres/parametres.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AjouterEnseignantComponent } from './enseignant/ajouter-enseignant/ajouter-enseignant.component';
import { ConsulterListeStagesComponent } from './stages/consulter-liste-stages/consulter-liste-stages.component';
import { ConsulterListeSujetsComponent } from './sujets/consulter-liste-sujets/consulter-liste-sujets.component';
import { ModifierStageComponent } from './stages/modifier-stage/modifier-stage.component';
import { ModifierSujetComponent } from './sujets/modifier-sujet/modifier-sujet.component';
import { ConsulterListeReclamationsComponent } from './reclamations/consulter-liste-reclamations/consulter-liste-reclamations.component';
import { ConsulterReclamationComponent } from './reclamations/consulter-reclamation/consulter-reclamation.component';


@NgModule({
  declarations: [DashboardComponent, AcceuilAdminComponent, ConsulterDemandesComponent, ConsulterProfileComponent, ConsulterProfileComponent, ChangerMdpComponent, ModifierComponent, ConsulterListeComponent, ConsulterListeEnseignantsComponent, ModifierEtudiantComponent, ModifierEnseignantComponent, AjouterComponent, ConsulterComponent, AffecterComponent, ParametresComponent, AjouterEnseignantComponent, ConsulterListeStagesComponent, ConsulterListeSujetsComponent, ModifierStageComponent, ModifierSujetComponent, ConsulterListeReclamationsComponent, ConsulterReclamationComponent],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class DashboardAdminModule { }
