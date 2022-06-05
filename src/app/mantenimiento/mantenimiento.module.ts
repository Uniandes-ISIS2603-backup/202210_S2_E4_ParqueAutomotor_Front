import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantenimientoListComponent } from './mantenimiento-list/mantenimiento-list.component';
import { MantenimientoDetailComponent } from './mantenimiento-detail/mantenimiento-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MantenimientoListComponent,MantenimientoDetailComponent],
  exports: [MantenimientoListComponent,MantenimientoDetailComponent]
})
export class MantenimientoModule { }
