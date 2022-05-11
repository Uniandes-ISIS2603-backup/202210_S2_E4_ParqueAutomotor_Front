import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoDetail } from '../vehiculo-detail';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.css']
})
export class VehiculoListComponent implements OnInit {

  vehiculos: Array<VehiculoDetail>=[];
  selected: Boolean = false;
  selectedVehiculo!: VehiculoDetail;

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }

  onSelected(vehiculo: VehiculoDetail): void {
    this.selected = true;
    this.selectedVehiculo = vehiculo;
  }

  ngOnInit() {
    this.getVehiculos();
  }

}
