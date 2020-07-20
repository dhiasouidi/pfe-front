import { Component, OnInit } from '@angular/core';
import { DemandeDeStage } from 'src/app/Models/DemandeDeStage';
import { DemandesAdminService } from 'src/app/services/demandes-admin.service';

@Component({
  selector: 'app-consulter-demandes',
  templateUrl: './consulter-demandes.component.html',
  styleUrls: ['./consulter-demandes.component.css']
})
export class ConsulterDemandesComponent implements OnInit {

  constructor(private _DemandeService:DemandesAdminService) { }
  demandes:[DemandeDeStage]
  id:number
  ngOnInit(): void {
    this._DemandeService.getall().subscribe((demandes:[DemandeDeStage])=>{
      this.demandes=demandes
  })

}

modelid;
modelindex;
setModelData(id,i){
this.modelid=id;
this.modelindex=i;
}
affecter(id: number,i)
  {
    this._DemandeService.affecter(id).subscribe(
      data=>{
        if (data)
        this.demandes[i].ETAT_DEMANDE='A'
      },error => console.log(error)

    )

  }
}
