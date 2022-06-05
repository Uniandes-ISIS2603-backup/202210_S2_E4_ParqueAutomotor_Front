import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { RouterModule } from '@angular/router';
import { ReservaRoutingModule } from './reserva-routing.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { ReservaFilterComponent } from './reserva-filter/reserva-filter.component';
import { EstudianteModule } from '../estudiante/estudiante.module';
import { ProfesorModule } from '../profesor/profesor.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReservaRoutingModule,
    ReactiveFormsModule,
    EstudianteModule,
    ProfesorModule
  ],
  declarations: [ReservaListComponent,ReservaDetailComponent,ReservaFilterComponent],
  exports:[ReservaListComponent,ReservaDetailComponent]
})
export class ReservaModule {}
