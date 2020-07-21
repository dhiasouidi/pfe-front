import { Component, OnInit } from '@angular/core';
import { Stage } from 'src/app/Models/Stage';
import { Observable } from 'rxjs';
import { StageEtudiantService } from 'src/app/services/stage-etudiant.service';

@Component({
  selector: 'app-completer-info-stage',
  templateUrl: './completer-info-stage.component.html',
  styleUrls: ['./completer-info-stage.component.css']
})
export class CompleterInfoStageComponent implements OnInit {

  constructor(private _StageService:StageEtudiantService) { }
  success=false;
  dateerr=false;
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
    this.TYPE_STAGE=res.TYPE_STAGE;
    this.TEL_STAGE=res.TEL_STAGE;
    this.EMAIL_STAGE=res.EMAIL_STAGE;
    this.FAX_STAGE=res.FAX_STAGE;
    this.ENCADRANT_STAGE=res.ENCADRANT_STAGE;
    this.ENCADRANT_EMAIL=res.ENCADRANT_EMAIL;
    this.DATE_DEBUT=res.DATE_DEBUT;
    this.DATE_FIN=res.DATE_FIN;
    this.ADRESSE=res.ADRESSE;
    this.DESCRIPTION=res.DESCRIPTION;
  });
}

update()
{
  let body={
    TEL_STAGE:this.TEL_STAGE,
    FAX_STAGE:this.FAX_STAGE,
    EMAIL_STAGE:this.EMAIL_STAGE,
    ENCADRANT_STAGE:this.ENCADRANT_STAGE,
    ENCADRANT_EMAIL:this.ENCADRANT_EMAIL,
    DATE_DEBUT:this.DATE_DEBUT,
    DATE_FIN:this.DATE_FIN,
    ADRESSE:this.ADRESSE,
    DESCRIPTION:this.DESCRIPTION,
  }
  if(this.DATE_DEBUT>this.DATE_FIN)
  {
    this.success=false;
    this.dateerr=true;
  }else
  {
    this._StageService.update(body).subscribe((res:any)=>{
      this.dateerr=false;
      this.success=true;
      console.log(res)
    })
  }

  }

}
