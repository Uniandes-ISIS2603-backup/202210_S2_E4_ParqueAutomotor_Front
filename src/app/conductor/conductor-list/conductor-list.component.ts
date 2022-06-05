import { Component, EventEmitter, OnInit } from '@angular/core';
import { Reserva } from 'src/app/reserva/Reserva';
import { ConductorDetail } from '../conductor-detail';
import { ConductorServiceService } from '../conductor-service.service';

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css']


})
export class ConductorListComponent implements OnInit {
  activate: Boolean = false;
  conductores: Array<ConductorDetail> = [];
  conductores_copy: Array<ConductorDetail> = [];
  selected: Boolean = false;
  selected_Reserva: Boolean = false;
  selectedConductor!: ConductorDetail;
  selectedReserva!: Reserva;

  onSelected(Conductor: ConductorDetail): void {
    this.selected = true;
    this.selectedConductor = Conductor;
  }


  constructor(private ConductorService:ConductorServiceService) {   }
    getNotification(evt: EventEmitter<any>): void {
    let mensaje=evt as unknown as Array<any>;

    if(mensaje[0]=="fecha"){
      this.selected=false;
      this.filtrar_conductores_reservas_fecha(mensaje[1]);
    }
    if (mensaje[0] == 'Restablecer') {
      this.selected = false;
      this.getConductors();
    }

    if (mensaje[0] == 'mas_reservas') {
      this.selected = false;
      this.filtrar_conductores_reservas_mas_reservas();
    }
  }
  filtrar_conductores_reservas_mas_reservas() {
    console.log(this.conductores)
    this.conductores.sort((a, b) => {
      return b.reservas.length-a.reservas.length ;
    });
    console.log(this.conductores)

  }
  filtrar_conductores_reservas_fecha(fecha: Date,fecha2:Date, conductor: string) {
    let conductores = this.conductores_copy;
    let conductores_filtrados: Array<ConductorDetail> = [];
    let conductors: ConductorDetail;
    for (let i = 0; i < conductores.length; i++) {
      if (conductores[i].identificacion == conductor) {
        let reservas: Array<Reserva> = [];
        conductors = {...conductores[i]};

        conductores_filtrados.push(conductors);

        for (let j = 0; j < conductors.reservas.length; j++) {
          if (conductors.reservas[j].fechaHoraReservada >= fecha && conductors.reservas[j].fechaHoraReservada <= fecha2)
          {
            reservas.push(conductors.reservas[j]);
          }
        }
        conductors.reservas = reservas;
        this.onSelected(conductors);
        break;
      }
      this.conductores = conductores_filtrados;

    }
  }
  getConductors(): void {
    this.ConductorService.getConductores().subscribe((conductores) => {
      this.conductores = conductores;
      this.conductores_copy = conductores;
    });
  }

  hide: boolean = false;
  show: boolean = false;

  ngOnInit() {
    this.getConductors();
  }
}
