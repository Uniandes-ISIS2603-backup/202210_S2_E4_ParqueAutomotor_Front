import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reserva } from '../Reserva';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {
  reservaId!: string;
  @Input() reservaDetail!:Reserva
  constructor(
    private route: ActivatedRoute,
    private reservaService: ReservaService
  ) { }
  getReserva(){
    this.reservaService.getReserva(this.reservaId).subscribe(Reserva=>{
      this.reservaDetail = Reserva;
    })
  }
  ngOnInit() {
    if(this.reservaDetail === undefined){
      this.reservaId = this.route.snapshot.paramMap.get('id')!
      if (this.reservaId) {
        this.getReserva();
      }
    }
  }

}
