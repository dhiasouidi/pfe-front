import { Component, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/Models/Etudiant';

@Component({
  selector: 'app-modifier-profile',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {

  constructor(private _EtudiantService:EtudiantService) { }
  cin_passeport:string;
  num_inscription:string;
  nom:string;
  prenom:string;
  date_naissaince:Date;
  diplome:string;
  specialite:string;
  cycle:string;
  niveau:string;
  telephone:string;
  email:string;
  skype:string="NOT SET";
  linkedin:string="NOT SET";




  ngOnInit(): void {
    this._EtudiantService.get().subscribe((res:Etudiant)=>{
      this.cin_passeport=res.CIN_PASSEPORT;
      this.num_inscription=res.NUM_INSCRIPTION;
      this.nom=res.NOM;
      this.prenom=res.PRENOM;
      this.date_naissaince=res.DATE_NAISSAINCE;
      this.diplome=res.DIPLOME;
      this.specialite=res.SPECIALITE;
      this.cycle=res.CYCLE;
      this.niveau=res.NIVEAU;
      this.telephone=res.TELEPHONE;
      this.email=localStorage.getItem('email');
      this.skype=res.SKYPE;
      this.linkedin=res.LINKEDIN;
      });
  }

  submit()
  {
    let body={
      NOM:this.nom,
      PRENOM:this.prenom,
      DATE_NAISSAINCE:this.date_naissaince,
      TELEPHONE:this.telephone,
      SKYPE:this.skype,
      LINKEDIN:this.linkedin
    }
    this._EtudiantService.update(body).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
