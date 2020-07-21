import { Component, OnInit } from '@angular/core';
import { Stage } from 'src/app/Models/Stage';
import { StageService } from 'src/app/services/stage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-stage',
  templateUrl: './modifier-stage.component.html',
  styleUrls: ['./modifier-stage.component.css']
})
export class ModifierStageComponent implements OnInit {

  constructor(private _StageService:StageService,private _ActivatedRoute:ActivatedRoute) { }

  stage:Stage
  id
  success=false;

  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.paramMap.get('id');

        this._StageService.get(this.id).subscribe((stage:Stage)=>{
        this.stage=stage
        console.log(stage);

  })

  }

  update()
  {
    let body={
      ORGANISME_STAGE:this.stage.ORGANISME_STAGE,
      TEL_STAGE:this.stage.TEL_STAGE,
      FAX_STAGE:this.stage.FAX_STAGE,
      EMAIL_STAGE:this.stage.EMAIL_STAGE,
      DATE_DEBUT:this.stage.DATE_DEBUT,
      DATE_FIN:this.stage.DATE_FIN,
    }

    this._StageService.update(this.id,body).subscribe(
      data=>{
        if (data)
        this.success=true;
        console.log(data)
      },error => console.log(error)

    )
  }


}
