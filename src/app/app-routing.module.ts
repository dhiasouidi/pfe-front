import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';



const routes: Routes = [{
  path:'',
  component:LoginComponent
},
{
      path: 'etudiant', loadChildren: () => import("./dashboard-etudiant/dashboard-etudiant.module").then(m => m.DashboardEtudiantModule),    canActivate: [AuthGuard]

},

{
  path: 'enseignant', loadChildren: () => import("./dashboard-enseignant/dashboard-enseignant.module").then(m => m.DashboardEnseignantModule),    canActivate: [AuthGuard]

}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
