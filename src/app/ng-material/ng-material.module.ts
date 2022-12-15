import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatConfirmComponent } from './mat-confirm/mat-confirm.component';
import { ReactiveFormsModule } from '@angular/forms';

const MaterialModules = [
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule
];
@NgModule({
  declarations: [
    MatConfirmComponent,
  ],
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MaterialModules
  ],
  exports: [
    MaterialModules
  ],
})
export class NgMaterialModule {}