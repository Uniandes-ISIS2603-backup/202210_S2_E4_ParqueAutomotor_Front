import { Component, EventEmitter, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoDetail } from '../vehiculo-detail';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  activate: Boolean =false;
  vehiculos: Array<VehiculoDetail>=[];
  vehiculos_copy: Array<VehiculoDetail>=[];
  selected: Boolean = false;
  selectedVehiculo!: VehiculoDetail;

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
      this.vehiculos_copy = vehiculos;
    });
  }

  onSelected(vehiculo: VehiculoDetail): void {
    this.selected = true;
    this.selectedVehiculo = vehiculo;
  }

  getNotification(evt: EventEmitter<any>): void {
    let mensaje=evt as unknown as Array<any>;


    if(mensaje[0]=="Restablecer")
    {
      this.selected=false;
      this.getVehiculos();
    }
    if(mensaje[0]=="mas_reservas"){
      this.selected=false;
      this.filtrar_conductores_reservas_mas_reservas();
    }

  }

  filtrar_conductores_reservas_mas_reservas(){
    this.vehiculos.sort((a,b)=>{
      return b.reservas.length-a.reservas.length;
    });
  }

  hide: boolean = false;
  show: boolean = false;

  ngOnInit() {
    this.getVehiculos();
  }

}
