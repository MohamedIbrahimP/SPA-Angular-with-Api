
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Services2Service {
   //baseUrl:string ='http://localhost:3005/Products'
   baseUrl:string ='http://localhost:5138/api/products'
   httpOptions={
    Headers:new HttpHeaders({'content-type':'application/json'})
   }
  constructor(public http:HttpClient) { }

  GetAll(){
    return this.http.get(this.baseUrl)
  }
  GetById(id:number){
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  Remove(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }
  AddNew(product:any){
    return this.http.post(`${this.baseUrl}`, product);
  }
  Edit(id:number,product:any){
    return this.http.put(`${this.baseUrl}/${id}`,product);
  }
  }

