import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PlantasResponse} from '../models/plantas-response'
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {
  
  private apiUrl = 'http://localhost:8080/api/plantas';

  constructor(private http: HttpClient,  private loginService: LoginService) { }

  getPlantas(): Observable<PlantasResponse[]> {
    const tokenString = this.loginService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenString}`
    });

      return this.http.get<PlantasResponse[]>(this.apiUrl, { headers }).pipe(
        catchError((error) => {
          console.error("Error al obtener las plantas", error);
          return throwError(() => new Error('Error en la solicitud ' + error.message));
        })
      );
  }
  crearPlanta(data: any): Observable<PlantasResponse>{
    const tokenString = this.loginService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenString}`
    });


    return this.http.post<PlantasResponse>(this.apiUrl,data, { headers }).pipe(
      tap((response)=> {
        console.log(response)
      }),
      catchError((error) =>{
        console.log("Error al crear una planta", error)
        return throwError(()=> new Error('Error en la solicitud ' + error.message))
      })
    )
  }
  updatePlanta(id:number, data:any): Observable<PlantasResponse>{
    const tokenString = this.loginService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${tokenString}`
    });
    return this.http.put<PlantasResponse>(`${this.apiUrl}/${id}`, data, {headers}).pipe(
      tap((response)=> {
        console.log()
      }),
      catchError((error)=> {
        console.log("Error al actualizar una planta", error)
        return throwError(()=> new Error('Error en la solicitud ' + error.message))
      })
      
    )
  }
}
