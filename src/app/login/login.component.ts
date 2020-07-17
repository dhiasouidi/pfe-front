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
spin=false;
error:string
  login(){
    this.spin=true
    this._AuthService.login(this.username,this.password).subscribe((res:any)=>{
      if (res){
      localStorage.setItem("token",res.access_token);
      localStorage.setItem("email",res.user.email);
      localStorage.setItem("id",res.user.login);
      localStorage.setItem("userinfo",JSON.stringify(res.userinfo));
      let infos = JSON.parse(localStorage.getItem('userinfo'))
      //console.log(infos['']);
      localStorage.setItem("role",res.user.userable_type);
      let role=res.user.userable_type;
      console.log(role);
      this._Router.navigate(['/'+role]);


    }
    },(err)=>{
      this.spin=false;
      console.log(err)
      this.error="Login/Mot de passe Incorrect"
  }
)}

}
