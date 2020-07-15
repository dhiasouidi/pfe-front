import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-changer-mdp',
  templateUrl: './changer-mdp.component.html',
  styleUrls: ['./changer-mdp.component.css']
})
export class ChangerMdpComponent implements OnInit {

  constructor(private _AuthService:AuthentificationService) { }
  currentpassword:string;
  newpassword:string;
  verifpassword:string;

  ngOnInit(): void {
  }
  submit(){
    let body={
      oldpass:this.currentpassword,
      newpass:this.newpassword,
      newpass_confirmation:this.verifpassword,
    }

    this._AuthService.modifiermdp(body).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
