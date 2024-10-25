import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef  } from '@angular/material/dialog';
import { ModalCrearComponent } from '../modal-crear/modal-crear.component';
import {PlantasService} from '../services/plantas.service'
import {PlantasResponse} from '../models/plantas-response'
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  isModalOpen = false;
  displayedColumns: string[] = ['pais', 'nombrePlanta', 'cantLecturas', 'alertasMedias', 'alertasAltas', 'acciones'];
  dialogRef: MatDialogRef<ModalCrearComponent> | null = null; 
  plantas: PlantasResponse[] = [];



  
  constructor(public dialog: MatDialog, private plantaService: PlantasService, private loginService:LoginService) {}
  

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

  ngOnInit(): void {
    const tokenString = this.loginService.getToken();
    const token =  tokenString ? JSON.parse(tokenString).tokenLogin : null;
    this.plantaService.getPlantas(token).subscribe(data => {
        this.plantas = data;
    });
  }
}
