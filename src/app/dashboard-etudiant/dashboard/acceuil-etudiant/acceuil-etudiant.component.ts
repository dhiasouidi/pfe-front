import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acceuil-etudiant',
  templateUrl: './acceuil-etudiant.component.html',
  styleUrls: ['./acceuil-etudiant.component.css']
})
export class AcceuilEtudiantComponent implements OnInit {

  constructor(private _Router:Router,private _route:ActivatedRoute) { }

  ngOnInit(): void {

  }

}
