import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private _http:HttpClient) { }
 header={
   headers:new HttpHeaders({
     "Access-Control-Allow-Origin":"*"
   })
 }
  login(username,password){
    return this._http.post(apiUrl+"login?login="+username+"&password="+password,{},this.header)
  }
  getuser():Observable<any>{
    return  this._http.get(apiUrl+'currentetudiant',this.header);
    }
  modifiermdp(body){
   let header={
      headers:new HttpHeaders({
        "Access-Control-Allow-Origin":"*",
        "Authorization":"Bearer "+localStorage.getItem('token')

      })
    }
      return  this._http.put<any>(apiUrl+'changemdp',body,header);
      }
}
