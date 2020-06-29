import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthentificationService) { }
  username:string;
  password:string

  ngOnInit(): void {

  }



  login(){
    this._AuthService.login(this.username,this.password).subscribe((res:any)=>{
      console.log(res)
    })
  }

}
