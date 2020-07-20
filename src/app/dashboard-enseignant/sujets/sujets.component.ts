import { Component, OnInit } from '@angular/core';
import { Sujet } from 'src/app/Models/Sujet';
import { EncadrementService } from 'src/app/services/encadrement.service';

@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['./sujets.component.css']
})
export class SujetsComponent implements OnInit {

  constructor(private _EnseignantService:EncadrementService) { }
sujets:[Sujet]
  ngOnInit(): void {
    this._EnseignantService.getsujets().subscribe((sujets:[Sujet])=>{
      this.sujets=sujets
      console.log(sujets);
  })}

}
