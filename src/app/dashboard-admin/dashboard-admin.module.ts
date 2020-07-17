import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceuilAdminComponent } from './dashboard/acceuil-admin/acceuil-admin.component';
import { ConsulterDemandesComponent } from './demandes/consulter-demandes/consulter-demandes.component';
import { ConsulterProfileComponent } from './profile/consulter-profile/consulter-profile.component';
import { ChangerMdpComponent } from './profile/changer-mdp/changer-mdp.component';
import { ModifierComponent } from './profile/modifier/modifier.component';


@NgModule({
  declarations: [DashboardComponent, AcceuilAdminComponent, ConsulterDemandesComponent, ConsulterProfileComponent, ConsulterProfileComponent, ChangerMdpComponent, ModifierComponent],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule
  ]
})
export class DashboardAdminModule { }
