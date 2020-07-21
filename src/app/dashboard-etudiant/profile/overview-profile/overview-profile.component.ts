import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Sujet } from 'src/app/Models/Sujet';
import { Etudiant } from 'src/app/Models/Etudiant';

@Component({
  selector: 'app-overview-profile',
  templateUrl: './overview-profile.component.html',
  styleUrls: ['./overview-profile.component.css']
})
export class OverviewProfileComponent implements OnInit {

  constructor(private _EtudiantService:EtudiantService) { }
  sujet:Sujet;
  etudiant:Etudiant;
  depose=false;
  encadrant=false;

  ngOnInit(): void {
    this.loadetudiant();
    this.loadsujet();
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
      this.sujet=sujet
      if(sujet.DEPOSE)
      {
        this.depose=true;
        this.encadrant=true;
      }
      else
      {
        this.depose=false;
        this.encadrant=true;

      }
      });
  }


}
