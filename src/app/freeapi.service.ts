import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor( private htttp : HttpClient) { }
  getPosts() : Observable<any> {
    return this.htttp.get<any>(`${this.baseUrl}/posts`);
}
}
