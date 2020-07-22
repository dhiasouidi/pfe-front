import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/Models/Admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-consulter-profile',
  templateUrl: './consulter-profile.component.html',
  styleUrls: ['./consulter-profile.component.css']
})
export class ConsulterProfileComponent implements OnInit {

  constructor(private _AdminService:AdminService) { }
  click1=true;
  click2=false;
  NOMA
  PRENOM
  infos = JSON.parse(localStorage.getItem('userinfo'));
  nom = this.infos['PRENOM']+this.infos['NOM'];

  ngOnInit(): void {
    this._AdminService.get().subscribe((res:Admin)=>{
      this.NOMA=res.NOM;
      this.PRENOM=res.PRENOM;

      });
  }
  changemenue1(){
    this.click1=true;
    this.click2=false;

    }
    changemenue2(){
      this.click2=true;
      this.click1=false;

      }

      submit()
      {
        let body={
          NOM:this.NOMA,
          PRENOM:this.PRENOM,

        }
        this._AdminService.update(body).subscribe((res:any)=>{
          console.log(res)
        })
      }
}
