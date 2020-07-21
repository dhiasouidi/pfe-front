import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sujet } from '../Models/Sujet';
import { apiUrl } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class SujetService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token')
    })

  }
  add(body):Observable<Sujet>
  {
      return this._http.post<Sujet>(apiUrl+'sujetsave',body,this.header);
  }
  addencadrant(body):Observable<any>
  {
      return this._http.post<any>(apiUrl+'addencadrant',body,this.header);
  }
  addbinome(encadrant):Observable<any>
  {
      return this._http.post<any>(apiUrl+'addbinome',encadrant,this.header);
  }
  monsujet():Observable<Sujet>
  {
    return this._http.get<Sujet>(apiUrl+'monsujet',this.header)
  }
  getall():Observable<[Sujet]>
  {
    return this._http.get<[Sujet]>(apiUrl+'sujetsall',this.header);
  }
  getbyid(id):Observable<Sujet>
  {
    return this._http.get<Sujet>(apiUrl+'sujet/'+id,this.header);
  }

}
