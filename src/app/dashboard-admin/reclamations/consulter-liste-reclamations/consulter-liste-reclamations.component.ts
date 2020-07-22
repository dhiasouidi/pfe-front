import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { Reclamation } from 'src/app/Models/Reclamation';

@Component({
  selector: 'app-consulter-liste-reclamations',
  templateUrl: './consulter-liste-reclamations.component.html',
  styleUrls: ['./consulter-liste-reclamations.component.css']
})
export class ConsulterListeReclamationsComponent implements OnInit {

  constructor(private _RecService:ReclamationService) { }
reclamations
  ngOnInit(): void {
    this._RecService.getall().subscribe((rec:[Reclamation])=>{
      this.reclamations=rec
  })

}}
