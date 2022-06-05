import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Mantenimiento } from 'src/app/mantenimiento/mantenimiento';
import { Reserva } from 'src/app/reserva/Reserva';
import { VehiculoDetail } from '../vehiculo-detail';

@Component({
  selector: 'app-vehiculo-detail',
  templateUrl: './vehiculo-detail.component.html',
  styleUrls: ['./vehiculo-detail.component.css']
})
export class VehiculoDetailComponent implements OnInit {

  @Input() vehiculoDetail!: VehiculoDetail;
  @Input() activate: boolean=true;

  activeStatus: boolean = true;
  esconder:boolean = false;
  mantenimiento!: Mantenimiento;
  reserva!: Reserva;

  onSelectedReserva(reserva: Reserva): void {
    this.activate = true;
    this.reserva = reserva;
  }
  onSelectedMantenimiento(mantenimiento: Mantenimiento): void {
    this.activate = true;
    this.mantenimiento = mantenimiento;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.activate = false;
  }

  ngOnInit() {
  }

}
