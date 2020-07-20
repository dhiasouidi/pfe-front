import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemandeEtudiantService } from 'src/app/services/demande-etudiant.service';
import { DemandeDeStage } from 'src/app/Models/DemandeDeStage';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  constructor(private _DemandeService:DemandeEtudiantService) {

  }
  organisme_acceuil:string;
  error:string
  success=false;
  fail=false;
  ngOnInit(): void {
  }

  demande_post(){
    let body={
      ORGANISME_DEMANDE:this.organisme_acceuil

    }
    this._DemandeService.ajouter(body).subscribe( (demande:DemandeDeStage)=>{
      this.fail=false;
      this.success=true;
        },(err)=>{
          if(err.status == 400){
            this.error= 'Demande existe déjà';
          }
          else
          {
            this.error=err.error.message
          }
          this.fail=true;
    })
  }
}
