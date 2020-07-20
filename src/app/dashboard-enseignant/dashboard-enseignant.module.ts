import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEnseignantRoutingModule } from './dashboard-enseignant-routing.module';
import { DashboardEnseignantComponent } from './dashboard-enseignant/dashboard-enseignant.component';
import { AcceuilEnseignantComponent } from './dashboard-enseignant/acceuil-enseignant/acceuil-enseignant.component';
import { PlanifierComponent } from './encadrement/planifier/planifier.component';
import { PlanningComponent } from './encadrement/planning/planning.component';
import { ConsulterDemandesEncadrementComponent } from './demandes/consulter-demandes-encadrement/consulter-demandes-encadrement.component';
import { SujetsComponent } from './sujets/sujets.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardEnseignantComponent, AcceuilEnseignantComponent, PlanifierComponent, PlanningComponent, ConsulterDemandesEncadrementComponent, SujetsComponent, ProfileComponent],
  imports: [
    CommonModule,
    DashboardEnseignantRoutingModule,
    FormsModule

  ]
})
export class DashboardEnseignantModule { }
