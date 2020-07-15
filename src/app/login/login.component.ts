import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthentificationService, private _Router:Router) { }
  username:string;
  password:string

  ngOnInit(): void {
    let role=localStorage.getItem("role");
    if (role)
    this._Router.navigate(['/'+role])
  }

  login(){
    this._AuthService.login(this.username,this.password).subscribe((res:any)=>{
      if (res){
      localStorage.setItem("token",res.access_token);
      localStorage.setItem("user",res.user);
      localStorage.setItem("role",res.user.userable_type);
      let role=res.user.userable_type;
      this._Router.navigate(['/'+role]);
    }
    })
  }

}
