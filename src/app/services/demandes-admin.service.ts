import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DemandeDeStage } from '../Models/DemandeDeStage';
import { apiUrl } from 'src/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandesAdminService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token'),
      "Accept": "application/json",
      'Content-Type': 'multipart/form-data'
    })
  }

  getall():Observable<[any]>{
    return  this._http.get<[any]>(apiUrl+'demandeall',this.header);
    }
  affecter(id : number){
    return  this._http.put(apiUrl+'demande/affecter/'+id,{},this.header);
    }

}
