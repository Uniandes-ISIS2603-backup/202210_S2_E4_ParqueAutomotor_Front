import { Component, OnInit } from '@angular/core';
import { Mantenimiento } from '../mantenimiento';
import { MantenimientoService } from '../mantenimiento.service';

@Component({
  selector: 'app-mantenimiento-list',
  templateUrl: './mantenimiento-list.component.html',
  styleUrls: ['./mantenimiento-list.component.css']
})
export class MantenimientoListComponent implements OnInit {

  mantenimientos: Array<Mantenimiento>=[];

  constructor(private mantenimientoService:MantenimientoService) {   }

  getMantenimientos(): void {
    this.mantenimientoService.getMantenimientos().subscribe((mantenimientos) => {
      this.mantenimientos = mantenimientos;
    });
  }
  ngOnInit() {
    this.getMantenimientos();
  }

}
