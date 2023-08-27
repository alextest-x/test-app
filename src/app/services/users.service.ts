import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  [x: string]: any;


  constructor(private http: HttpClient) {
    console.log('Servicio Http');
  }

  getUser(): any{
    //return this.http.get('https://api.ipbase.com/v1/json/');

    return this.http.get('https://jsonplaceholder.typicode.com/users');
    //return this.http.get('http://api.ipstack.com/201.103.31.99?access_key=d09072edec5d5ceb075864b155e6ed84');

  }
}
