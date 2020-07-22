import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceuilAdminComponent } from './dashboard/acceuil-admin/acceuil-admin.component';
import { ConsulterDemandesComponent } from './demandes/consulter-demandes/consulter-demandes.component';
import { ConsulterProfileComponent } from './profile/consulter-profile/consulter-profile.component';
import { ConsulterListeComponent } from './etudiants/consulter-liste/consulter-liste.component';
import { ConsulterListeEnseignantsComponent } from './enseignant/consulter-liste-enseignants/consulter-liste-enseignants.component';
import { SoutenanceComponent } from '../dashboard-etudiant/soutenance/soutenance.component';
import { ConsulterComponent } from './soutenances/consulter/consulter.component';
import { ModifierComponent } from '../dashboard-etudiant/profile/modifier/modifier.component';
import { ModifierEtudiantComponent } from './etudiants/modifier/modifier-etudiant/modifier-etudiant.component';
import { AjouterComponent } from './etudiants/ajouter/ajouter.component';
import { AjouterEnseignantComponent } from './enseignant/ajouter-enseignant/ajouter-enseignant.component';
import { ModifierEnseignantComponent } from './enseignant/modifier/modifier-enseignant/modifier-enseignant.component';
import { ConsulterListeStagesComponent } from './stages/consulter-liste-stages/consulter-liste-stages.component';
import { ModifierStageComponent } from './stages/modifier-stage/modifier-stage.component';
import { ConsulterListeSujetsComponent } from './sujets/consulter-liste-sujets/consulter-liste-sujets.component';
import { ModifierSujetComponent } from './sujets/modifier-sujet/modifier-sujet.component';
import { ConsulterListeReclamationsComponent } from './reclamations/consulter-liste-reclamations/consulter-liste-reclamations.component';
import { ConsulterReclamationComponent } from './reclamations/consulter-reclamation/consulter-reclamation.component';


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
        {//Acceuil
          path:'etudiants',component:ConsulterListeComponent
        },
                {//Acceuil
                  path:'etudiant/modifier/:id',component:ModifierEtudiantComponent
                },
                                {//Acceuil
                                  path:'etudiant/ajouter',component:AjouterComponent
                                },
        {//Acceuil
          path:'enseignants',component:ConsulterListeEnseignantsComponent
        },
                {//Acceuil
                  path:'enseignant/ajouter',component:AjouterEnseignantComponent
                },
                {//Acceuil
                  path:'enseignant/modifier/:id',component:ModifierEnseignantComponent
                },
        {//Acceuil
          path:'soutenances',component:ConsulterComponent
        },
                {//Acceuil
                  path:'stages',component:ConsulterListeStagesComponent
                },
                                {//Acceuil
                                  path:'stage/modifier/:id',component:ModifierStageComponent
                                },

                    {//Acceuil
          path:'sujets',component:ConsulterListeSujetsComponent
        },

         {//Acceuil
          path:'sujet/modifier/:id',component:ModifierSujetComponent
        },
                  {//Acceuil
                    path:'reclamations',component:ConsulterListeReclamationsComponent
                  },
        {//Acceuil
          path:'reclamation/:id',component:ConsulterReclamationComponent
        },

  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
