import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }
 header={
   headers:new HttpHeaders({
     "Access-Control-Allow-Origin":"*"
   })
 }
  login(username,password){
    return this.http.post(apiUrl+"login?login="+username+"&password="+password,{},this.header)
  }
}
