import { Component, OnInit } from '@angular/core';
import { SujetService } from 'src/app/services/sujet.service';
import { Sujet } from 'src/app/Models/Sujet';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EncadrementService } from 'src/app/services/encadrement.service';
import { Enseignant } from 'src/app/Models/Enseignant';

@Component({
  selector: 'app-consulter-sujet',
  templateUrl: './consulter-sujet.component.html',
  styleUrls: ['./consulter-sujet.component.css']
})
export class ConsulterSujetComponent implements OnInit {

  constructor(private _SujetService:SujetService,private _EtudiantService:EtudiantService,private _EnseignantService:EncadrementService) { }

  sujet:Sujet
  binome:Etudiant;
  etudiant:Etudiant;
  encadrant:Enseignant;
  ngOnInit(): void {
    this._SujetService.monsujet().subscribe((sujet:Sujet)=>{
      this.sujet=sujet

      });
    this._EtudiantService.get().subscribe((etudiant:Etudiant)=>{
      this.etudiant=etudiant

      });

    this._EtudiantService.getbyid(this.etudiant.binome_id).subscribe((binome:Etudiant)=>{
      this.binome=binome
      console.log(binome);

      });
      this._EnseignantService.getencadrant(this.sujet.ENCADRANT).subscribe((enca:Enseignant)=>{
        this.encadrant=enca;
        console.log(enca);

        });
  }

}
