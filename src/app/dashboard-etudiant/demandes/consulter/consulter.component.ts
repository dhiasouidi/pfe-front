import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DemandeEtudiantService } from 'src/app/services/demande-etudiant.service';
import { DemandeDeStage } from 'src/app/Models/DemandeDeStage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent  implements OnInit,AfterViewInit{

  test
  constructor(private _DemandeService:DemandeEtudiantService,private _route:ActivatedRoute) {




  }
  demandes:[DemandeDeStage]

  ngAfterViewInit(){
    this._DemandeService.getall().subscribe((demandes:[DemandeDeStage])=>{
      this.demandes=demandes
      this.test=true
      console.log(demandes)


      });
}
   ngOnInit() {
    this._DemandeService.getall().subscribe((demandes:[DemandeDeStage])=>{
      this.demandes=demandes
      this.test=true
      console.log(demandes)


      });
  }

}
