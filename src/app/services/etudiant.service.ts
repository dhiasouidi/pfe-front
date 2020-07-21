import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/config';
import { Observable } from 'rxjs';
import { Etudiant } from '../Models/Etudiant';
import { Sujet } from '../Models/Sujet';

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
    getbyid(id):Observable<Etudiant>{
      return  this._http.get<Etudiant>(apiUrl+'etudiant/'+id,this.header);
      }
    getall():Observable<[Etudiant]>{
      return this._http.get<[Etudiant]>(apiUrl+'etudiantall',this.header)
    }

    getsujet():Observable<Sujet>{
      return  this._http.get<Sujet>(apiUrl+'monsujet',this.header);
      }

    update(body){
      return  this._http.put(apiUrl+'updateinfos',body,this.header);
      }

      modifier(id,body)
      {
          return  this._http.post(apiUrl+'etudiant/update/'+id,body,this.header);
      }

      ajouter(body)
      {
        return  this._http.post(apiUrl+'etudiantsave',body,this.header);

      }

}
