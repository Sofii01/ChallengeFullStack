import {Component} from '@angular/core';
import { MatDialog, MatDialogRef  } from '@angular/material/dialog';
import { ModalCrearComponent } from '../modal-crear/modal-crear.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isModalOpen = false;
  displayedColumns: string[] = ['pais', 'nombrePlanta', 'cantLecturas', 'alertasMedias', 'alertasAltas', 'acciones'];
  dialogRef: MatDialogRef<ModalCrearComponent> | null = null; 
  
  plantas =[
    {
      pais: 'Argentina', 
      nombrePlanta: 'Quilmes',
      cantLecturas: 300,
      alertasMedias: 10,
      alertasAltas: 2
    }
  ]

  
  constructor(public dialog: MatDialog) {}
  

  openDialog(): void {
    this.isModalOpen = true;
    if (this.dialogRef) {
      this.dialogRef.close();  // Cierra el diálogo anterior si ya está abierto
    }
    this.dialogRef = this.dialog.open(ModalCrearComponent, {
      width: '250px',
      hasBackdrop: false, 
      
    });

    this.dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log('Dialog result:', result);
      }
      this.isModalOpen = false;
      this.dialogRef = null;

    });
  }

}
