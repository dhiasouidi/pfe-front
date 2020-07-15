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
  ngOnInit(): void {
  }

  demande_post(){
    let body={
      ORGANISME_DEMANDE:this.organisme_acceuil

    }
    this._DemandeService.ajouter(body).subscribe( (demande:DemandeDeStage)=>{
      console.log(demande)
    },(err)=>{
      console.log(err)
this.error=err.error.message
    })


  }
}
