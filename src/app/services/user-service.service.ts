import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  baseUrl:string ='http://localhost:5138/api/Users'
  httpOptions={
   Headers:new HttpHeaders({'content-type':'application/json'})
  }
  constructor(public http:HttpClient) { }
GetByUsername(username:string){
  return this.http.get(`${this.baseUrl}/${username}`)
}

}
