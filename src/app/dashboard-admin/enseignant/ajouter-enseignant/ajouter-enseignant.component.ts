import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';

@Component({
  selector: 'app-ajouter-enseignant',
  templateUrl: './ajouter-enseignant.component.html',
  styleUrls: ['./ajouter-enseignant.component.css']
})
export class AjouterEnseignantComponent implements OnInit {

  constructor(private _EnseignantService:EnseignantService) { }
  success=false;
  fail=false;

  NOM
  PRENOM
  GRADE
  SPECIALITE
  TELEPHONE
  EMAIL
  ETABLISSEMENT
  UNIVERSITE

  ngOnInit(): void {
  }

  ajouter()
  {
    let body={
      NOM:this.NOM,
      PRENOM:this.PRENOM,
      TELEPHONE:this.TELEPHONE,
      SPECIALITE:this.SPECIALITE,
      SEXE:this.ETABLISSEMENT,
      UNIVERSITE:this.UNIVERSITE,
      ETABLISSEMENT:this.ETABLISSEMENT,
      EMAIL:this.EMAIL,
      GRADE:this.GRADE
    }
    this._EnseignantService.add(body).subscribe( (enseignant:any)=>{
      this.fail=false;
      this.success=true;
        },(err)=>{
      this.fail=true;
    })

  }

}
