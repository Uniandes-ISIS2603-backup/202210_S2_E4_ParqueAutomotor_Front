import { Component, OnInit } from '@angular/core';
import { Conductor } from '../conductor';
import { ConductorServiceService } from '../conductor-service.service';

@Component({
  selector: 'app-conductor-list',
  templateUrl: './conductor-list.component.html',
  styleUrls: ['./conductor-list.component.css']
})
export class ConductorListComponent implements OnInit {

  conductores: Array<Conductor>=[];

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
