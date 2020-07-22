import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soutenance } from '../Models/Soutenance';
import { apiUrl } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class SoutenanceService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token'),
      "Accept": "application/json",
    })
  }

  getall():Observable<[Soutenance]>{
    return  this._http.get<[Soutenance]>(apiUrl+'soutenancesall',this.header);
    }
    getbyid(id):Observable<Soutenance>{
      return  this._http.get<Soutenance>(apiUrl+'soutenance/'+id,this.header);
      }

      modifier(id,body)
      {
        return  this._http.post(apiUrl+'soutenance/modifier/'+id,body,this.header);

      }

    }

