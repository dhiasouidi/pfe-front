import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EncadrementService } from 'src/app/services/encadrement.service';

@Component({
  selector: 'app-consulter-demandes-encadrement',
  templateUrl: './consulter-demandes-encadrement.component.html',
  styleUrls: ['./consulter-demandes-encadrement.component.css']
})
export class ConsulterDemandesEncadrementComponent implements OnInit {

  constructor(private _EnseignantService: EncadrementService) { }
  demandes

  ngOnInit(): void {
    this._EnseignantService.getdemandes().subscribe((demandes:[any])=>{
      this.demandes=demandes
      console.log(demandes);
  })}

  accepter(id: number)
  {
    this._EnseignantService.accepter(id).subscribe(
      data=>{

      },error => console.log(error)

    )

  }

}
