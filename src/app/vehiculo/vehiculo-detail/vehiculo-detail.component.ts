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
  @Input() activateR: boolean=false;
  @Input() activateM: boolean=false;

  activeStatus: boolean = true;
  esconder:boolean = false;
  mantenimiento!: Mantenimiento;
  reserva!: Reserva;

  onSelectedReserva(reserva: Reserva): void {
    this.activateR = true;
    this.activateM = false;
    this.reserva = reserva;
  }
  onSelectedMantenimiento(mantenimiento: Mantenimiento): void {
    this.activateM = true;
    this.activateR = false;
    this.mantenimiento = mantenimiento;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.activateR = false;
    this.activateM = false;
  }

  ngOnInit() {
  }

}
