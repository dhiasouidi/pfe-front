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
stage:Stage
  ngOnInit(): void {

    this._StageService.get().subscribe((stage:Stage)=>{
      this.stage=stage
        })
  }

}
