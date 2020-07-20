import { Component, OnInit } from '@angular/core';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { Enseignant } from 'src/app/Models/Enseignant';

@Component({
  selector: 'app-consulter-liste-enseignants',
  templateUrl: './consulter-liste-enseignants.component.html',
  styleUrls: ['./consulter-liste-enseignants.component.css']
})
export class ConsulterListeEnseignantsComponent implements OnInit {

  constructor(private _EnseignantService:EnseignantService) { }
  enseignants:[Enseignant];


  ngOnInit(): void {
    this._EnseignantService.getall().subscribe((enseignants:[Enseignant])=>{
      this.enseignants=enseignants
      console.log(enseignants);
  })

}}
