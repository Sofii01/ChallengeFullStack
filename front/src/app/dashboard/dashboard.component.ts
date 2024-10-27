import {Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef  } from '@angular/material/dialog';
import { ModalCrearComponent } from '../modal-crear/modal-crear.component';
import {PlantasService} from '../services/plantas.service'
import {PlantasResponse} from '../models/plantas-response'
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ModalUpdateComponent } from '../modal-update/modal-update.component';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  isModalOpen = false;
  displayedColumns: string[] = ['pais', 'nombrePlanta', 'cantLecturas', 'alertasMedias', 'alertasAltas', 'acciones'];
  dialogRef1: MatDialogRef<ModalCrearComponent> | null = null; 
  dialogRefUpdate: MatDialogRef<ModalUpdateComponent> | null = null; 
  dialogRefEliminar: MatDialogRef<ModalEliminarComponent> | null = null;
  plantas: PlantasResponse[] = [
    {
      id: 0,  
      pais: "Argentina",
      nombre: "Quilmes",
      cantLecturas: 100,
      cantAlertMedias: 3,
      cantAlertAltas: 2,
    }
  ];
  indicadores =[
    {
      tipo: "Temperatura",
      cantLecturas: 100,
      alertasMedias: 3,
      alertasAltas: 2,
      img: "../../assets/img/IconTemp.png"
    },{
      tipo: "Presión",
      cantLecturas: 100,
      alertasMedias: 3,
      alertasAltas: 2,
      img: "../../assets/img/IconPres.png"
    },{
      tipo: "Viento",
      cantLecturas: 100,
      alertasMedias: 3,
      alertasAltas: 2,
      img: "../../assets/img/IconViento.png"
    },{
      tipo: "Niveles",
      cantLecturas: 100,
      alertasMedias: 3,
      alertasAltas: 2,
      img: "../../assets/img/IconNiveles.png "
    },{
      tipo: "Energía",
      cantLecturas: 100,
      alertasMedias: 3,
      alertasAltas: 2,
      img: "../../assets/img/IconEnergia.png"
    },{
      tipo: "Tensión",
      cantLecturas: 100,
      alertasMedias: 3,
      alertasAltas: 2,
      img: "../../assets/img/IconTension.png"
    },{
      tipo: "Monóxido de carbono",
      cantLecturas: 100,
      alertasMedias: 3,
      alertasAltas: 2,
      img: "../../assets/img/IconMonoxido.png "
    },{
      tipo: "Otros gases",
      cantLecturas: 100,
      alertasMedias: 3,
      alertasAltas: 2,
      img: "../../assets/img/IconOtros.png "
    }



  ]
  isMenuOpen = false;

  toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

  
  constructor(
    public dialog: MatDialog, 
    private plantaService: PlantasService, ) {}
  

  openDialog(): void {
    this.isModalOpen = true;
    if (this.dialogRef1) {
      this.dialogRef1.close(); 
    }
    this.dialogRef1 = this.dialog.open(ModalCrearComponent, {
      hasBackdrop: false, 
      
    });

    this.dialogRef1.afterClosed().subscribe(result => {
      if(result){
        console.log('Dialog result:', result);
      }
      this.isModalOpen = false;
      this.dialogRef1 = null;
      this.getPlantas()
    });
  }

  ngOnInit(): void {
    this.getPlantas()
  }
  getPlantas(): void{
    this.plantaService.getPlantas().subscribe(data => {
      this.plantas = data;
    });

  }
  editar(planta: PlantasResponse): void{
    this.isModalOpen = true;
    if (this.dialogRefUpdate) {
      this.dialogRefUpdate.close(); 
    }
    this.dialogRefUpdate = this.dialog.open(ModalUpdateComponent, {
      hasBackdrop: false, 
      data: planta
      
    });
    this.dialogRefUpdate.afterClosed().subscribe(result => {
      this.isModalOpen = false;
      this.dialogRefUpdate = null;
      this.getPlantas()
      this.closeMenu()
    });
  }
  eliminar(planta: PlantasResponse): void{
    this.isModalOpen = true;
    if (this.dialogRefEliminar) {
      this.dialogRefEliminar.close(); 
    }
    this.dialogRefEliminar = this.dialog.open(ModalEliminarComponent, {
      hasBackdrop: false, 
      data: planta
      
    });
    this.dialogRefEliminar.afterClosed().subscribe(result => {
      this.isModalOpen = false;
      this.dialogRefEliminar = null;
      this.getPlantas()
    });
  }

}
