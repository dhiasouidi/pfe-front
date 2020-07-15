import { Component, OnInit } from '@angular/core';
import { DemandeEtudiantService } from 'src/app/services/demande-etudiant.service';
import { DemandeDeStage } from 'src/app/Models/DemandeDeStage';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulter',
  templateUrl: './consulter.component.html',
  styleUrls: ['./consulter.component.css']
})
export class ConsulterComponent {

  test
  constructor(private _DemandeService:DemandeEtudiantService,private _route:ActivatedRoute) {
    let loadDate=()=>{
      return new Promise((resolve,reject)=>{
    this._DemandeService.getall().subscribe((demandes:[DemandeDeStage])=>{
      resolve(demandes)

    })
  })
}

      this._DemandeService.getall().subscribe((demandes:[DemandeDeStage])=>{
        this.demandes=demandes
        this.test=true
        console.log(this.demandes)


        });

  }
  demandes:any


  async ngOnInit() {

  }

}
