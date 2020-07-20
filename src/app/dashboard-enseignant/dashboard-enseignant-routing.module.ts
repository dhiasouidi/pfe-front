import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardEnseignantComponent } from './dashboard-enseignant/dashboard-enseignant.component';
import { AcceuilEnseignantComponent } from './dashboard-enseignant/acceuil-enseignant/acceuil-enseignant.component';
import { PlanifierComponent } from './encadrement/planifier/planifier.component';
import { PlanningComponent } from './encadrement/planning/planning.component';
import { ConsulterDemandesEncadrementComponent } from './demandes/consulter-demandes-encadrement/consulter-demandes-encadrement.component';
import { SujetsComponent } from './sujets/sujets.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [{
  path:'',
  component:DashboardEnseignantComponent,children:[
    {
      path:'',component:AcceuilEnseignantComponent
    },
    {
      path:'encadrement/planifier/:id',component:PlanifierComponent
    },
    {
      path:'encadrement/planning',component:PlanningComponent
    },
    {
      path:'demandes',component:ConsulterDemandesEncadrementComponent
    },
    {
      path:'encadrement/sujets',component:SujetsComponent
    },

    {
      path:'profile',component:ProfileComponent
    }

  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardEnseignantRoutingModule { }
