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

stage:Stage;
  ngOnInit(): void {
  }
update()
{
  this._StageService.update(this.stage).subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

}
