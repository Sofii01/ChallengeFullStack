import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {PlantasResponse} from '../models/plantas-response'
import { PlantasService } from '../services/plantas.service';

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent {
  paises = [
    { name: 'Argentina', value: 'AR' },
    { name: 'Brazil', value: 'BR' },
    { name: 'Chile', value: 'CL' }
  
  ];
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalUpdateComponent>,
    private fb:FormBuilder,
    private plantaService: PlantasService,
    @Inject(MAT_DIALOG_DATA) public data: PlantasResponse,
    
  ) {
    this.form= this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      pais: ['',  [Validators.required]],
      cantLecturas: ['', [Validators.required, Validators.min(1)]],
      alertasMedias: ['', [Validators.required, Validators.min(1)]],
      alertasAltas: ['', [Validators.required, Validators.min(1)]],
      sensDes:['', [Validators.required, Validators.min(1)]]
    })
    console.log(this.data);
  }

  
    onNoClick(): void {
      this.dialogRef.close();
    }

    onEditar(){
      if(this.form.invalid){
        return;
      }
      const nombre = this.form.get('nombre')?.value;
      const pais = this.form.get('pais')?.value;
      const cantLecturas = this.form.get('cantLecturas')?.value;
      const alertasMedias = this.form.get('alertasMedias')?.value;
      const alertasAltas = this.form.get('alertasAltas')?.value;
      const sensDes = this.form.get('sensDes')?.value;
      
      const id = this.data.id;
      
      this.plantaService.updatePlanta(id, {nombre, pais, cantLecturas, alertasMedias, alertasAltas,sensDes}).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }

      )
      this.dialogRef.close();
    }
}
