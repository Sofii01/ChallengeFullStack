import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-crear',
  templateUrl: './modal-crear.component.html',
  styleUrls: ['./modal-crear.component.css']
})
export class ModalCrearComponent {
  plantName: string = '';
  selectedPais: string = '';
  paises = [
    { name: 'Argentina', value: 'AR' },
    { name: 'Brazil', value: 'BR' },
    { name: 'Chile', value: 'CL' }
  ];

  constructor(public dialogRef: MatDialogRef<ModalCrearComponent>) {
    
  }

  
    onNoClick(): void {
      this.dialogRef.close();
    }
}
