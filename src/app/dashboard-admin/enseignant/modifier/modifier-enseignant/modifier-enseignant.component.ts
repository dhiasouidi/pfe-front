import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Enseignant } from 'src/app/Models/Enseignant';

@Component({
  selector: 'app-modifier-enseignant',
  templateUrl: './modifier-enseignant.component.html',
  styleUrls: ['./modifier-enseignant.component.css']
})
export class ModifierEnseignantComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,private _EnseignantService:EnseignantService,private _Router:Router) { }
id
success=false;

  enseignant:Enseignant
  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.paramMap.get('id');
    this._EnseignantService.getbyid(this.id).subscribe((enseignant:Enseignant)=>{
      this.enseignant=enseignant
      console.log(enseignant);
  })

}
update()
{
  let body={
      NOM:this.enseignant.NOM,
      PRENOM:this.enseignant.PRENOM,
      ID_ENSEIGNANT:this.enseignant.NOM+this.enseignant.PRENOM+'ISGT',
      TELEPHONE:this.enseignant.TELEPHONE,
      SPECIALITE:this.enseignant.SPECIALITE,
      SEXE:this.enseignant.ETABLISSEMENT,
      UNIVERSITE:this.enseignant.UNIVERSITE,
      ETABLISSEMENT:this.enseignant.ETABLISSEMENT,

      EMAIL:this.enseignant.EMAIL,
      GRADE:this.enseignant.GRADE
    }
    this._EnseignantService.modifier(this.id,body).subscribe(
      data=>{
        if (data)
        this._Router.navigate(['/admin/enseignant/modifier/'+this.enseignant.NOM+this.enseignant.PRENOM+'ISGT'])
        this.success=true;
        console.log(data)
      },error => console.log(error)

    )
  }


}
