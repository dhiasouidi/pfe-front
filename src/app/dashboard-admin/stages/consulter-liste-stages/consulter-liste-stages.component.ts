import { Component, OnInit } from '@angular/core';
import { StageService } from 'src/app/services/stage.service';
import { Stage } from 'src/app/Models/Stage';

@Component({
  selector: 'app-consulter-liste-stages',
  templateUrl: './consulter-liste-stages.component.html',
  styleUrls: ['./consulter-liste-stages.component.css']
})
export class ConsulterListeStagesComponent implements OnInit {

  constructor(private _StageService:StageService) { }
modelid;
modelindex;
  stages
  ngOnInit(): void {
    this._StageService.getall().subscribe((stages:[Stage])=>{
      this.stages=stages
  })
  }
  setModelData(id,i){
    this.modelid=id;
    this.modelindex=i;
    }

    desaffecter(id: number,i)
    {
      this._StageService.desaffecter(id).subscribe(
        data=>{

        },error => console.log(error)

      )

    }
}
