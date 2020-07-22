import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/config';
import { Reclamation } from '../Models/Reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token'),
      "Accept": "application/json",
    })
  }

  getall():Observable<[any]>{
    return  this._http.get<[any]>(apiUrl+'reclamationsall',this.header);
    }

    getbyid(id):Observable<Reclamation>{
      return  this._http.get<Reclamation>(apiUrl+'reclamation/'+id,this.header);
      }
      post(body){
        return  this._http.post<Reclamation>(apiUrl+'reclamationsave',body,this.header);
        }
}
