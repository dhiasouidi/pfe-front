import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardEnseignantRoutingModule } from './dashboard-enseignant-routing.module';
import { DashboardEnseignantComponent } from './dashboard-enseignant/dashboard-enseignant.component';
import { AcceuilEnseignantComponent } from './dashboard-enseignant/acceuil-enseignant/acceuil-enseignant.component';


@NgModule({
  declarations: [DashboardEnseignantComponent, AcceuilEnseignantComponent],
  imports: [
    CommonModule,
    DashboardEnseignantRoutingModule
  ]
})
export class DashboardEnseignantModule { }
