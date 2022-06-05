import { Component, OnInit,EventEmitter } from '@angular/core';
import { Reserva } from '../Reserva';
import { ReservaDetail } from '../Reserva-detail';
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
  reservasEstudiante: Array<ReservaDetail> = [];
  reservas_copy: Array<Reserva> = [];
  constructor(private reservaService:ReservaService) {
    this.selected = false;
    this.getReservas();
  }

   getReservas():void {
     this.reservaService.getReservas().subscribe(reservas => {
       this.reservas = reservas;
       this.reservas_copy = reservas;
     })
   }
   getReservasEstudiantes(id:string):void{
      this.reservaService.getEstudiantes(id).subscribe(reservasEstudiante =>{
        this.reservasEstudiante = reservasEstudiante;
      })
   }
  onSelectedReserva(reserva:Reserva):void{
    this.selected =true;
    this.selectedReserva = reserva;
    console.log("Entrando a reserva ;)")
  }

  getNotification(evt: EventEmitter<any>):void{
    let mensaje=evt as unknown as Array<any>;
    if(mensaje[0]=="fecha"){
      this.selected = false;
      this.filtrarReservaFecha(mensaje[1]);
    }
    if(mensaje[0]=="restablecer")
    {
      this.selected = false;
      this.getReservas();
    }

  }

  filtrarReservaFecha(fecha:Date){
    console.log(fecha);
    let reservas = this.reservas_copy;
    let reservas_filtradas : Array<Reserva> = [];
    for(let i=0;i < reservas.length; i++)
    {

      if(reservas[i].fechaHoraReservada == fecha)
      {
        reservas_filtradas.push(reservas[i]);
      }
    }

    this.reservas = reservas_filtradas;
  }
  ngOnInit() {
    this.getReservas();
    this.selected = false;
  }

}
