import { Component, OnInit } from '@angular/core';
import { StageEtudiantService } from 'src/app/services/stage-etudiant.service';
import { ActivatedRoute } from '@angular/router';
import { Stage } from 'src/app/Models/Stage';

@Component({
  selector: 'app-consulter-stage',
  templateUrl: './consulter-stage.component.html',
  styleUrls: ['./consulter-stage.component.css']
})
export class ConsulterStageComponent implements OnInit {

  constructor(private _StageService:StageEtudiantService,private _route:ActivatedRoute) { }

  TYPE_STAGE:string;
  ORGANISME_STAGE:string;
  TEL_STAGE:Date;
  FAX_STAGE:string;
  EMAIL_STAGE:string;
  ENCADRANT_STAGE:string;
  ENCADRANT_EMAIL:string;
  DATE_DEBUT:Date;
  DATE_FIN:Date;
  ETUDIANT_ID:string;
  ADRESSE:string;
  DESCRIPTION:string;
  TELEPHONE:string;

  ngOnInit(): void {

    this._StageService.get().subscribe((res:Stage)=>{

      this.ORGANISME_STAGE=res.ORGANISME_STAGE;
      this.TYPE_STAGE=res.TYPE_STAGE;
      this.TEL_STAGE=res.TEL_STAGE;
      this.EMAIL_STAGE=res.EMAIL_STAGE;
      this.ENCADRANT_STAGE=res.ENCADRANT_STAGE;
      this.ENCADRANT_EMAIL=res.ENCADRANT_EMAIL;
      this.DATE_DEBUT=res.DATE_DEBUT;
      this.DATE_FIN=res.DATE_FIN;
      this.ADRESSE=res.ADRESSE;
      this.DESCRIPTION=res.DESCRIPTION;
    });
  }

}
