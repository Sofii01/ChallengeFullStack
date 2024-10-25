import {Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCrearComponent } from '../modal-crear/modal-crear.component';

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
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalCrearComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('Dialog result:', result);
      }
      

    });
  }

}
