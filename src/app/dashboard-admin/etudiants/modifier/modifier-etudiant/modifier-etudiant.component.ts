import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/Models/Etudiant';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,private _EtudiantService:EtudiantService,private _Router:Router  ) { }
NOM;
PRENOM;
DATE_NAISSAINCE;
TELEPHONE;
DIPLOME;
SPECIALITE;
CYCLE;
NIVEAU;
etudiant:Etudiant;
id
success=false;
err;
  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.paramMap.get('id');
    this._EtudiantService.getbyid(this.id).subscribe((etudiant:Etudiant)=>{
      this.etudiant=etudiant
      console.log(etudiant);

  })}

  update()
  {
    let body={
      NOM:this.etudiant.NOM,
      PRENOM:this.etudiant.PRENOM,
      DATE_NAISSAINCE:this.etudiant.DATE_NAISSAINCE,
      TELEPHONE:this.etudiant.TELEPHONE,
      DIPLOME:this.etudiant.DIPLOME,
      CYCLE:this.etudiant.CYCLE,
      NIVEAU:this.etudiant.NIVEAU,
      SPECIALITE:this.etudiant.SPECIALITE
    }

    this._EtudiantService.modifier(this.id,body).subscribe(
      data=>{
        if (data)
        this.success=true;
        console.log(data)
      },error => console.log(error)

    )
  }



}
