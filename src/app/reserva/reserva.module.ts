import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { RouterModule } from '@angular/router';
import { ReservaRoutingModule } from './reserva-routing.routing';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReservaRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReservaListComponent,ReservaDetailComponent],
  exports:[ReservaListComponent,ReservaDetailComponent]
})
export class ReservaModule {}
