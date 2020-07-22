import { Component, OnInit } from '@angular/core';
import { Reclamation } from 'src/app/Models/Reclamation';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulter-reclamation',
  templateUrl: './consulter-reclamation.component.html',
  styleUrls: ['./consulter-reclamation.component.css']
})
export class ConsulterReclamationComponent implements OnInit {

  constructor(private _RecService:ReclamationService,private _ActivatedRoute:ActivatedRoute) { }
reclamation:Reclamation
id
  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.paramMap.get('id');

    this._RecService.getbyid(this.id).subscribe((rec:Reclamation)=>{
    this.reclamation=rec
  })}

}
