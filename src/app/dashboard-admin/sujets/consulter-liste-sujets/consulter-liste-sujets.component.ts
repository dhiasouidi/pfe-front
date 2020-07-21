import { Component, OnInit } from '@angular/core';
import { Sujet } from 'src/app/Models/Sujet';
import { SujetService } from 'src/app/services/sujet.service';

@Component({
  selector: 'app-consulter-liste-sujets',
  templateUrl: './consulter-liste-sujets.component.html',
  styleUrls: ['./consulter-liste-sujets.component.css']
})
export class ConsulterListeSujetsComponent implements OnInit {

  constructor(private _SujetService:SujetService) { }

  sujets:[Sujet];
  ngOnInit(): void {
    this._SujetService.getall().subscribe((sujets:[Sujet])=>{
      this.sujets=sujets
      console.log(sujets);

  })
  }
}
