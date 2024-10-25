import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError  } from 'rxjs';
import { AuthResponse } from '../models/auth-response'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/api/auth'

  constructor(private http: HttpClient) {

  }
  tokenRecibido: String = '';
  login(data: any): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data).pipe(
      tap((respose) => {
        
        localStorage.setItem('token', respose.token);  
      }),
      catchError(function (error) {
        console.error('Error en la solicitud HTTP:', error);
        return throwError(() => new Error('Error en la solicitud: ' + error.message));
      })
    )
  }
  getToken(): string | null {
    const token = localStorage.getItem('token');
    return token;
  }
}
