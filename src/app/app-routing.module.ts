import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
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

},
{
  path: 'admin', loadChildren: () => import("./dashboard-admin/dashboard-admin.module").then(m => m.DashboardAdminModule), canActivate: [AuthGuard]

},

{ path: '', redirectTo: '', pathMatch: 'full' },
{ path: '**', redirectTo: '' },


];
const config: ExtraOptions = {
  useHash: true,
};
@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
