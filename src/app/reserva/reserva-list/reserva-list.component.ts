import { Component, OnInit } from '@angular/core';
import { Reserva } from '../Reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {


  reservas: Array<Reserva> = [];
  constructor(private reservaService:ReservaService) { }

  getReservas():void {
    this.reservaService.getReservas().subscribe(reservas => {
      this.reservas = reservas;
    })
  }
  ngOnInit() {
    this.getReservas;
  }

}
