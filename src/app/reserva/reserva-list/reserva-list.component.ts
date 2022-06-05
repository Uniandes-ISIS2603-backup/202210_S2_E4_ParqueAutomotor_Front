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

    if(mensaje[0] == "conductor")
    {
      this.selected = false;
      this.filtrarReservaConductor(mensaje[1]);
    }

    if(mensaje[0] == "estudiante")
    {
      this.selected = false;
      this.filtrarReservasEstudiante(mensaje[1]);
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

  filtrarReservaConductor(idConductor: number)
  {
    let reservas = this.reservas_copy;
    let reservas_filtradas : Array<Reserva> = [];
    for(let i=0;i < reservas.length; i++)
    {
      console.log("llegue");
      if(reservas[i].conductor.id == idConductor )
      {
        reservas_filtradas.push(reservas[i]);
      }
    }

    this.reservas = reservas_filtradas;
  }

  filtrarReservasEstudiante(idEstudiante:number){
    let reservas = this.reservas_copy;
    let reservas_filtradas : Array<Reserva> = [];
    let x = idEstudiante as unknown as string;
    let centinela: boolean = false;
    this.getReservasEstudiantes(x);

    for(let i = 0; i < this.reservasEstudiante.length; i ++)
    {
      for(let j=0;j < reservas.length && !centinela; j++)
      {
        if(this.reservasEstudiante[i].id == reservas[i].id)
        {
          reservas_filtradas.push(reservas[i]);
        }
      }
    }

  }
  ngOnInit() {
    this.getReservas();
    this.selected = false;
  }

}
