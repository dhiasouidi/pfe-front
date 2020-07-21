import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/Models/Etudiant';

@Component({
  selector: 'app-consulter-liste',
  templateUrl: './consulter-liste.component.html',
  styleUrls: ['./consulter-liste.component.css']
})
export class ConsulterListeComponent implements OnInit {

  constructor(private _EtudiantService:EtudiantService) { }
  etudiants:[Etudiant];

  ngOnInit(): void {
    this._EtudiantService.getall().subscribe((etudiants:[Etudiant])=>{
      this.etudiants=etudiants

  })

}}
