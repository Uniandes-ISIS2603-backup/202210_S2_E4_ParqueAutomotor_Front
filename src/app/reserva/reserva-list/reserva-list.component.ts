import { Component, OnInit } from '@angular/core';
import { Reserva } from '../Reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {

  selectedReserva!:Reserva;
  selected: Boolean = false;
  reservas: Array<Reserva> = [];
  constructor(private reservaService:ReservaService) { }

  // getReservas():void {
  //   this.reservaService.getReservas.subscribe(reservas => {
  //     this.reservas = reservas;
  //   })
  // }

  onSelectedReserva(reserva:Reserva):void{
    this.selected =true;
    this.selectedReserva = reserva;
  }
  ngOnInit() {
    // this.getReservas;
  }

}
