import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mantenimiento } from '../mantenimiento';
import { MantenimientoService } from '../mantenimiento.service';

@Component({
  selector: 'app-mantenimiento-detail',
  templateUrl: './mantenimiento-detail.component.html',
  styleUrls: ['./mantenimiento-detail.component.css']
})
export class MantenimientoDetailComponent implements OnInit {
  mantenimientoId!: string;
  @Input() mantenimientoDetail!:Mantenimiento
  constructor(
    private route: ActivatedRoute,
    private mantenimientoService: MantenimientoService
  ) { }
  getMantenimiento(){
    this.mantenimientoService.getMantenimiento(this.mantenimientoId).subscribe(Mantenimiento=>{
      this.mantenimientoDetail = Mantenimiento;
    })
  }
  ngOnInit() {
    if(this.mantenimientoDetail === undefined){
      this.mantenimientoId = this.route.snapshot.paramMap.get('id')!
      if (this.mantenimientoId) {
        this.getMantenimiento();
      }
    }
  }

}
