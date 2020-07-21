import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Enseignant } from 'src/app/Models/Enseignant';
import { SujetService } from 'src/app/services/sujet.service';
import { Sujet } from 'src/app/Models/Sujet';
import { Etudiant } from 'src/app/Models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-creer',
  templateUrl: './creer.component.html',
  styleUrls: ['./creer.component.css']
})
export class CreerComponent implements OnInit {

  constructor(private _EnseignantService:EnseignantService,private _SujetService:SujetService,private _EtudiantService:EtudiantService) { }
  enseignants:[Enseignant];
  etudiants:[Etudiant];
  success=false;
  fail=false;
  error;
  TITRE_SUJET;
  ENCADRANT;
  BINOME;

  ngOnInit(): void {
    this._EnseignantService.getall().subscribe((res:[Enseignant])=>{
      this.enseignants=res;
    });
    this._EtudiantService.getall().subscribe((res:[Etudiant])=>{
      this.etudiants=res;
    });

  }

  onChange(encadrant) {
    this.ENCADRANT=encadrant;
   }
  onChange1(binome) {
    this.BINOME=binome
    }

  ajouter(){
    let body={
      TITRE_SUJET:this.TITRE_SUJET
    }
    this._SujetService.add(body).subscribe( (sujet:Sujet)=>{
      this.fail=false;
      this.success=true;
      console.log(sujet)
        },(err)=>{

    })
  }
  ajouterencadrant(){
    let body={
      ENCADRANT:this.ENCADRANT

    }
    this._SujetService.addencadrant(body).subscribe( (encadrant:any)=>{
      this.fail=false;
      this.success=true;
      console.log(encadrant)
        },(err)=>{
          if(err.status == 400){
            this.error= err.error.message;
          }
          else
          {
            this.error=err.error.message
          }
          this.fail=true;
    })
  }
  ajouterbinome(){
    let body={
      binome_id:this.BINOME

    }
    this._SujetService.addbinome(body).subscribe( (binome:any)=>{
      this.fail=false;
      this.success=true;
      console.log(binome)
        },(err)=>{
          if(err.status == 400){
            this.error= err.error.message;
          }
          else
          {
            this.error=err.error.message
          }
          this.fail=true;
    })
  }
}
