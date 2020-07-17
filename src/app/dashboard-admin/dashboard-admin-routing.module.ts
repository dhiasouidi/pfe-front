import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceuilAdminComponent } from './dashboard/acceuil-admin/acceuil-admin.component';
import { ConsulterDemandesComponent } from './demandes/consulter-demandes/consulter-demandes.component';
import { ConsulterProfileComponent } from './profile/consulter-profile/consulter-profile.component';


const routes: Routes = [{
  path:'',
  component:DashboardComponent,children:[
    {//Acceuil
      path:'',component:AcceuilAdminComponent
    },
        {//Acceuil
          path:'demandes-stages',component:ConsulterDemandesComponent
        },
                {//Acceuil
                  path:'profile',component:ConsulterProfileComponent
                },
  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
