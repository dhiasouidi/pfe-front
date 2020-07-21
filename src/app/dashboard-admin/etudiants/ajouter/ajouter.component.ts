import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  constructor(private _EtudiantService:EtudiantService) { }
  success=false;
  fail=false;
  CIN_PASSEPORT
  NUM_INSCRIPTION
  NOM
  PRENOM
  DATE_NAISSAINCE
  TELEPHONE
  DIPLOME
  CYCLE
  NIVEAU
  SPECIALITE
  SEXE
  NATIONALITE
  EMAIL
  ngOnInit(): void {
  }
  onChange1(nation) {
    this.NATIONALITE=nation
    }
    onChange2(sexe) {
      this.SEXE=sexe
      }

  ajouter()
  {
    let body={
      CIN_PASSEPORT:this.CIN_PASSEPORT,
      NUM_INSCRIPTION:this.NUM_INSCRIPTION,
      NOM:this.NOM,
      PRENOM:this.PRENOM,
      DATE_NAISSAINCE:this.DATE_NAISSAINCE,
      TELEPHONE:this.TELEPHONE,
      DIPLOME:this.DIPLOME,
      CYCLE:this.CYCLE,
      NIVEAU:this.NIVEAU,
      SPECIALITE:this.SPECIALITE,
      NATIONALITE:this.NATIONALITE,
      SEXE:this.SEXE,
      EMAIL:this.EMAIL
    }
    this._EtudiantService.ajouter(body).subscribe( (etudiant:any)=>{
      this.fail=false;
      this.success=true;
        },(err)=>{
      this.fail=true;
    })
  }

}
