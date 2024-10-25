import { Component } from '@angular/core';
import {CantTotalesService} from '../services/cant-totales.service'
import { CantTotalResponse} from '../models/cant-total-response'



@Component({
  selector: 'app-cards-lecturas',
  templateUrl: './cards-lecturas.component.html',
  styleUrls: ['./cards-lecturas.component.css']
})
export class CardsLecturasComponent {
  cantLecturas: number = 0;
  cantAlertMedias: number = 0;
  cantAlertAltas: number = 0;
  cantSensDes: number = 0;

  constructor(private cantService: CantTotalesService) {
    
  }
  ngOnInit(): void {
    this.getCantidades();
  }
  getCantidades(): void{
    this.cantService.getCatidades().subscribe(
      (response: CantTotalResponse | null )=> {
        if(response){
          console.log(response);
          this.cantLecturas = response.cantLecturas;
          this.cantAlertMedias = response.cantAlertMedias;
          this.cantAlertAltas = response.cantAlertAltas;
          this.cantSensDes = response.cantSensDes;
   
        }
        console.error("Datos no encontrados")
      },
      error => {
        console.log("Error al buscar datos de lecturas", error)
      }

    )
  }

}
