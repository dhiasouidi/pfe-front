import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DemandeEtudiantService } from 'src/app/services/demande-etudiant.service';
import { DemandeDeStage } from 'src/app/Models/DemandeDeStage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent  implements OnInit{

  constructor(private _DemandeService:DemandeEtudiantService,private _route:ActivatedRoute) { }

  load=false;
  demandes:[DemandeDeStage]
   ngOnInit() {

    this._DemandeService.getall().subscribe((demandes:[DemandeDeStage])=>{
      this.demandes=demandes
      this.load=true;
      });
  }

  print(id)
  {
    this._DemandeService.print(id).subscribe(()=>{

          });
  }

}
