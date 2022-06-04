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

  activate:Boolean =false;
  conductores: Array<ConductorDetail>=[];
  selected: Boolean = false;
  selected_Reserva:Boolean = false;
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
      this.filtrar_conductores_reservas_fecha(mensaje[1]);
    }
    

  }
  filtrar_conductores_reservas_fecha(fecha:Date){
    let conductores=this.conductores;
    let conductores_filtrados:Array<ConductorDetail>=[];
    for( let i=0; i<conductores.length;i++){
      let cantidad=0;
      for (let j=0; j<conductores[i].reservas.length;j++){
        if(conductores[i].reservas[j].fechaHoraReservada==fecha){
          cantidad++;
        }
      }
      if (cantidad>0){
        conductores_filtrados.push(conductores[i]);
      }
    }
    this.conductores=conductores_filtrados;

  }
  getConductors(): void {
    this.ConductorService.getConductores().subscribe((conductores) => {
      this.conductores = conductores;
    });
  }
  
  hide: boolean = false;
  show: boolean = false;


  ngOnInit() {
    this.getConductors();
  }

}
