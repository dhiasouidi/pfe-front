import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from 'src/config';
import { Stage } from '../Models/Stage';

@Injectable({
  providedIn: 'root'
})
export class StageEtudiantService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token')
    })

  }

  get():Observable<any>{
    return  this._http.get(apiUrl+'getstageetudiant',this.header);
    }
  update(stage:Stage):Observable<Stage>
    {
        return this._http.put<Stage>(apiUrl+'stage/complete', stage);
    }
}
