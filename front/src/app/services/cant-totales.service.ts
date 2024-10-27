import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError  } from 'rxjs';
import {CantTotalResponse} from '../models/cant-total-response'
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class CantTotalesService {
  private apiUrl = 'https://challengefullstack.onrender.com/api/plantas'
  constructor(private http: HttpClient, private loginService: LoginService) { }
  
  getCatidades(): Observable<CantTotalResponse>{
    const tokenString = this.loginService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenString}`
    });
    return this.http.get<CantTotalResponse>(`${this.apiUrl}/cantidades`, {headers})
      .pipe(
        catchError((error)=>{
          console.error('Error en la solicitud HTTP:', error);
        return throwError(() => new Error('Error en la solicitud: ' + error.message));
        })
      )
  }


}
