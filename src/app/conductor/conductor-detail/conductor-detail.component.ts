import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Reserva } from 'src/app/reserva/Reserva';
import { ConductorDetail } from '../conductor-detail';

@Component({
  selector: 'app-conductor-detail',
  templateUrl: './conductor-detail.component.html',
  styleUrls: ['./conductor-detail.component.css']
})
export class ConductorDetailComponent implements OnInit {
  @Input() conductorDetail!: ConductorDetail;
  @Input() activate: boolean=true;

  activeStatus: boolean = true;
  esconder:boolean = false;
  reserva!: Reserva;
  onSelectedReserva(reserva: Reserva): void {
    this.activate = true;
    this.reserva = reserva;
  }
  ngOnChanges(changes: SimpleChanges) {
    this.activate = false;
  }

  ngOnInit() {
  }

}
