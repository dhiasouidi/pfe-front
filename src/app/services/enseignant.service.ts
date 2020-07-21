import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../Models/Enseignant';
import { apiUrl } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token')

    })
  }
  getall():Observable<[Enseignant]>{
    return this._http.get<[Enseignant]>(apiUrl+'enseignantall',this.header)
  }

  add(body){

    return  this._http.post(apiUrl+'enseignantsave',body,this.header);

  }
  modifier(id,body)
  {
      return  this._http.put(apiUrl+'enseignant/update/'+id,body,this.header);
  }
  getbyid(id):Observable<Enseignant>{
    return  this._http.get<Enseignant>(apiUrl+'enseignant/'+id,this.header);
    }

}
