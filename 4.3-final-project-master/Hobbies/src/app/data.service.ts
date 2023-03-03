import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Hobbies } from './hobbies';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url : string = 'http://localhost:9000/api';
  httpHeaders = new HttpHeaders().set('Content-Type','application/json')
  constructor(private http: HttpClient) { }

 

getAllHobby():Observable<Hobbies[]>{
  return this.http.get<Hobbies[]>(this.url);
}


getHobbyId(id:any):Observable<Hobbies>{
  let new_url =  `${this.url}/get-hobby/${id}`
  return this.http.get<Hobbies>(new_url,{headers:this.httpHeaders});
}


deleteHobbyById(id:string):Observable<Hobbies>{
  
  return this.http.delete<Hobbies>(this.url+'/'+id);
}


updateHobbyById(hobby:Hobbies):Observable<Hobbies>{
  return this.http.put<Hobbies>(this.url+'/'+hobby._id,hobby);
}

createHobby(hobby:Hobbies):Observable<any> {
  let new_url =  `${this.url}/add-hobby`; 
  return this.http.post(new_url,hobby);
}
}
