import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservaListComponent,ReservaDetailComponent],
  exports:[ReservaListComponent]
})
export class ReservaModule { }
