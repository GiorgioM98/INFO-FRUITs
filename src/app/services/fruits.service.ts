import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  constructor(private http: HttpClient) { }

  base_url = "/api/fruit";

  getAllFruits(): Observable<any> {
    const url = `${this.base_url}/all`;
    return this.http.get(url);
  }

  getFruitDetails(fruitName: string): Observable<any> {
    const url = `${this.base_url}/${fruitName}`;
    return this.http.get(url);
  }
}
