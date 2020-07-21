import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SeanceEncadrement } from '../Models/SeanceEncadrement';
import { apiUrl } from 'src/config';
import { Sujet } from '../Models/Sujet';
import { Enseignant } from '../Models/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EncadrementService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token')

    })
  }
  post(body)
  {
    return  this._http.post<SeanceEncadrement>(apiUrl+'seancesave',body,this.header);
  }
  get(month,year)
  {
    return this._http.get<[SeanceEncadrement]>(apiUrl+"seanceget?year="+year+"&month="+month,this.header)
  }

  getall()
  {
    return this._http.get<[Sujet]>(apiUrl+"sujetall",this.header)
  }

  getdemandes()
  {
    return this._http.get<[any]>(apiUrl+"mesdemandesenc",this.header)
  }
  getsujets()
  {
    return this._http.get<[any]>(apiUrl+"messujetsenc",this.header)
  }

  accepter(id)
  {
    return  this._http.post<any>(apiUrl+'accepterencadrement/'+id,this.header);
  }

  getencadrant(id)
  {
    return  this._http.get<Enseignant>(apiUrl+'enseignant/'+id,this.header);
  }

}
