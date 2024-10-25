import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PlantasResponse} from '../models/plantas-response'


@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  private apiUrl = 'http://localhost:8080/api/plantas';

  constructor(private http: HttpClient) { }

  getPlantas(token: string): Observable<PlantasResponse[]> {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.get<PlantasResponse[]>(this.apiUrl, { headers });
  }
}
