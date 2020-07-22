import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/config';
import { Observable } from 'rxjs';
import { Admin } from '../Models/Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private _http:HttpClient) { }
  header={
    headers:new HttpHeaders({
      "Access-Control-Allow-Origin":"*",
      "Authorization":"Bearer "+localStorage.getItem('token')

    })
}
get():Observable<Admin>{
  return  this._http.get<Admin>(apiUrl+'currentadmin',this.header);
  }
update(body){
  return  this._http.put(apiUrl+'updateadmin',body,this.header);
  }

}
