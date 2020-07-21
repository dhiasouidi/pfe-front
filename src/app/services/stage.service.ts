import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/config';
import { Stage } from '../Models/Stage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StageService {


  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token')
    })

  }

  getall()
  {
    return this._http.get<[Stage]>(apiUrl+"stagesall",this.header)
  }
  get(id)
  {
    return this._http.get<Stage>(apiUrl+"stage/"+id,this.header)
  }
  update(id,body){
    return  this._http.post(apiUrl+'stage/modifier/'+id,body,this.header);
  }
  desaffecter(id : number){
    return  this._http.put(apiUrl+'stage/desaffecter/'+id,{},this.header);
    }
}
