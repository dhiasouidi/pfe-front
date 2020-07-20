import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AjouterComponent } from './demandes/ajouter/ajouter.component';
import { ConsulterComponent } from './demandes/consulter/consulter.component';
import { AcceuilEtudiantComponent } from './dashboard/acceuil-etudiant/acceuil-etudiant.component';
import { ConsulterSujetComponent } from './sujet/consulter-sujet/consulter-sujet.component';
import { ConsulterStageComponent } from './stage/consulter-stage/consulter-stage.component';
import { CompleterInfoStageComponent } from './stage/completer-info-stage/completer-info-stage.component';
import { ConsulterProfileComponent } from './profile/consulter-profile/consulter-profile.component';
import { CreerComponent } from './sujet/creer/creer.component';
import { ReclamerComponent } from './reclamer/reclamer.component';
import { DepotComponent } from './depot/depot.component';
import { SoutenanceComponent } from './soutenance/soutenance.component';
import { AjouterBinomeComponent } from './sujet/binome/ajouter-binome/ajouter-binome.component';
import { AfficherBinomeComponent } from './sujet/binome/afficher-binome/afficher-binome.component';
import { AfficherEncadrantComponent } from './sujet/encadrant/afficher-encadrant/afficher-encadrant.component';
import { AjouterEncadrantComponent } from './sujet/encadrant/ajouter-encadrant/ajouter-encadrant.component';



const routes: Routes = [{
  path:'',
  component:DashboardComponent,children:[
    {//Acceuil
      path:'',component:AcceuilEtudiantComponent
    },//Demandes Routes
    {
      path:'demandes/ajouter',component:AjouterComponent
    },
    {
      path:'demandes/consulter',component:ConsulterComponent
    },//Stages Routes
    {
      path:'stage/consulter',component:ConsulterStageComponent
    },
    {
      path:'stage/modifier',component:CompleterInfoStageComponent
    }
    ,
    {
      path:'sujet/binome/ajouter',component:AjouterBinomeComponent
    }
    ,
    {
      path:'sujet/binome/consulter',component:AfficherBinomeComponent
    }
    ,
    {
      path:'sujet/encadrant/ajouter',component:AjouterEncadrantComponent
    }
    ,
    {
      path:'sujet/encadrant/consulter',component:AfficherEncadrantComponent
    },
//Sujet Routes
    {
      path:'sujet',component:ConsulterSujetComponent
    },
    {
      path:'sujet/creer',component:CreerComponent
    },//Profile Routes
    //Sujet Routes
    {
      path:'profile',component:ConsulterProfileComponent
    },
    {
      path:'reclamer',component:ReclamerComponent
    },
    {
      path:'depot',component:DepotComponent
    },
    {
      path:'soutenance',component:SoutenanceComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardEtudiantRoutingModule { }
