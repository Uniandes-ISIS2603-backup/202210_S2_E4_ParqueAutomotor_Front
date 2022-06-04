import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReservaModule } from '../reserva/reserva.module';
import { ReservaDetailComponent } from '../reserva/reserva-detail/reserva-detail.component';
import { ConductorFilterComponent } from './conductor-filter/conductor-filter.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReservaModule
  ],
  declarations: [ConductorListComponent,ConductorDetailComponent,ConductorFilterComponent],
  exports: [ConductorListComponent]
})
export class ConductorModule { }
