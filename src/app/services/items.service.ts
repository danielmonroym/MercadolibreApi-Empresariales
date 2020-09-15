import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  baseURL='https://api.mercadolibre.com/sites/MCO/search?q=';
  URL='https://api.mercadolibre.com/items/';
  query:any;
  constructor( private http: HttpClient) { }

  getItems(query): Observable<any> {
    console.log(`${this.baseURL}`+`${query}`);
    return this.http.get(`${this.baseURL}${query}`);

  }

  getItemDetails( query:any): Observable<any> {

    return this.http.get(`${this.URL}${query}`);

  }
}
