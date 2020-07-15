import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardEnseignantComponent } from './dashboard-enseignant/dashboard-enseignant.component';
import { AcceuilEnseignantComponent } from './dashboard-enseignant/acceuil-enseignant/acceuil-enseignant.component';


const routes: Routes = [{
  path:'',
  component:DashboardEnseignantComponent,children:[
    {
      path:'',component:AcceuilEnseignantComponent
    },

  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardEnseignantRoutingModule { }
