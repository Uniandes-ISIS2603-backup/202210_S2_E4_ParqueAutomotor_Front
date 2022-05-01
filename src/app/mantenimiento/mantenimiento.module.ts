import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoListComponent } from './mantenimiento-list/mantenimiento-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MantenimientoListComponent],
  exports: [MantenimientoListComponent]
})
export class MantenimientoModule { }
