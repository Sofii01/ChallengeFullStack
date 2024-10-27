import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantasService } from '../services/plantas.service';

@Component({
  selector: 'app-modal-crear',
  templateUrl: './modal-crear.component.html',
  styleUrls: ['./modal-crear.component.css']
})
export class ModalCrearComponent {

  paises = [
    { name: 'Argentina', value: 'AR' },
    { name: 'Brazil', value: 'BR' },
    { name: 'Chile', value: 'CL' }
  ];
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<ModalCrearComponent>,
    private fb: FormBuilder,
    private plantaService: PlantasService
  ) {
    this.form= this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      pais: ['',  [Validators.required]]
    })
  }

  
  onNoClick(): void {
      this.dialogRef.close();
  }
  onCrearPlanta(){
    if(this.form.invalid){
      return;
    }
    const nombre = this.form.get('nombre')?.value;
    const pais = this.form.get('pais')?.value;

    this.plantaService.crearPlanta({nombre, pais}).subscribe(
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
