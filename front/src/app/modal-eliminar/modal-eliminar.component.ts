import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {PlantasResponse} from '../models/plantas-response'
import { PlantasService } from '../services/plantas.service';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.css']
})
export class ModalEliminarComponent {
  constructor(public dialogRef: MatDialogRef<ModalEliminarComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: PlantasResponse,
    private plantaService: PlantasService
  ){
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onEliminarPlanta(){
    const id = this.data.id;
    this.plantaService.eliminarPlanta(id).subscribe(
      response=>{
        console.log(response);
        this.dialogRef.close();

      },
      error => {
        console.log(error);
        
      }
    )
    this.dialogRef.close();
  }
}
