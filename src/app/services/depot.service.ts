import { Injectable } from '@angular/core';
import { apiUrl } from 'src/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepotService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token'),
      "Accept": "application/json",
    })
  }

  uploadRapport(body){

    return this._http.post(apiUrl + 'deposer/rapport', body,  this.header);
  }
}
