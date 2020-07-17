import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/config';
import { Observable } from 'rxjs';
import { Etudiant } from '../Models/Etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token')

    })
  }

  get():Observable<Etudiant>{
    return  this._http.get<Etudiant>(apiUrl+'currentetudiant',this.header);
    }
    update(body){
      return  this._http.put(apiUrl+'updateinfos',body,this.header);
      }
}
