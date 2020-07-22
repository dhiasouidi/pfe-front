import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/Models/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamer',
  templateUrl: './reclamer.component.html',
  styleUrls: ['./reclamer.component.css']
})
export class ReclamerComponent implements OnInit {

  constructor(private _RecService:ReclamationService) { }

  OBJET;
  CORPS;
  success=false;

  ngOnInit(): void {
  }
  post(){

    let body={
      OBJET:this.OBJET,
      CORPS:this.CORPS
    }
    this._RecService.post(body).subscribe( (rec:any)=>{
      this.success=true;
        },(err)=>{

    })
  }

}
