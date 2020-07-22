import { Component, OnInit } from '@angular/core';
import { Sujet } from 'src/app/Models/Sujet';
import { SujetService } from 'src/app/services/sujet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modifier-sujet',
  templateUrl: './modifier-sujet.component.html',
  styleUrls: ['./modifier-sujet.component.css']
})
export class ModifierSujetComponent implements OnInit {

  constructor(private _SujetService:SujetService,private _ActivatedRoute:ActivatedRoute) { }
  sujet:Sujet
  id
  success=false;
  ngOnInit(): void {
    this.id= this._ActivatedRoute.snapshot.paramMap.get('id');

    this._SujetService.getbyid(this.id).subscribe((sujet:Sujet)=>{
    this.sujet=sujet

})
  }

  update()
  {
    let body={
      TITRE_SUJET:this.sujet.TITRE_SUJET,
    }

    this._SujetService.update(this.id,body).subscribe(
      data=>{
        if (data)
        this.success=true;
        console.log(data)
      },error => console.log(error)

    )
  }

}
