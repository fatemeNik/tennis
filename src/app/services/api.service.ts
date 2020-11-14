import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

constructor(private http:HttpClient ) {
  
}

get_player_data(){

  let header:HttpHeaders = new HttpHeaders();
  header.append( "Content-Type", "application/json" );
 return this.http.get('https://inshallahfinal.herokuapp.com/signup', {headers: header});
}

}
