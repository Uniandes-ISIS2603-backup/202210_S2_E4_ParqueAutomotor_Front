import { Component, OnInit } from '@angular/core';
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

  getConductors(): void {
    this.ConductorService.getConductores().subscribe((conductores) => {
      this.conductores = conductores;
    });
  }
  ngOnInit() {
    this.getConductors();
  }

}
