import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/Models/User';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/Models/Etudiant';
import { Sujet } from 'src/app/Models/Sujet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _Router:Router,private _route:ActivatedRoute,private _EtudiantService:EtudiantService) {
    this.loadScripts();
   }
   infos = JSON.parse(localStorage.getItem('userinfo'))
   nom = this.infos['PRENOM']+this.infos['NOM']
   sexe = this.infos['SEXE'].trim();
   etudiant:Etudiant;
   sujet:Sujet;
   depose=false;
   isItTheTime=false;
  ngOnInit(): void {
    let role=localStorage.getItem("role");
    if (role !="etudiant"){
      this._Router.navigate(['/'+role])
    }
    this.loadetudiant();
    this.loadsujet();
    let date=new Date();
    let comparedDated=new Date(new Date("30-04").setFullYear(new Date().getFullYear()));
    if (date>=comparedDated){
      this.isItTheTime=true;
    }

  }

  loadScripts() {
    const dynamicScripts = [
      '../../../assets/js/scripts.bundle.js?v=7.0.5',
     //'../../../assets/plugins/global/plugins.bundle.js?v=7.0.5',
     '../../../assets/plugins /custom/prismjs/prismjs.bundle.js?v=7.0.5',
     '../../../assets/js/pages/widgets.js?v=7.0.5',
     '../../../assets/plugins/custom/fullcalendar/fullcalendar.bundle.js?v=7.0.5',
     '../../../assets/js/pages/custom/projects/list-datatable.js?v=7.0.5',
     '../../../assets/js/pages/crud/ktdatatable/advanced/vertical.js',
     '../../../assets/js/pages/crud/file-upload/dropzonejs.js?v=7.0.5',
     '../../../assets/js/pages/custom/projects/add-project.js?v=7.0.5',


    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  loadetudiant()
  {
    this._EtudiantService.get().subscribe((etudiant:Etudiant)=>{
      this.etudiant=etudiant
      });
  }
  loadsujet()
  {
    this._EtudiantService.getsujet().subscribe((sujet:Sujet)=>{
      if(sujet)
      {
        this.depose=true;
        this.sujet=sujet
      }
      else
      {
        this.depose=false;
      }
      });
  }
  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('userinfo');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this._Router.navigate(['/']);
}
}
