import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  plantas =[
    {
      pais: 'Argentina', 
      nombrePlanta: 'Quilmes',
      cantLecturas: 300,
      alertasMedias: 10,
      alertasAltas: 2
    }
  ]

  displayedColumns: string[] = ['pais', 'nombrePlanta', 'cantLecturas', 'alertasMedias', 'alertasAltas', 'acciones'];

}
