import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conductor } from 'src/app/conductor/conductor';
import { Profesor } from 'src/app/profesor/profesor';
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
  @Input() profesorSelected:boolean = false ;
  profesor!:Profesor;


  constructor(
    private route: ActivatedRoute,
    private reservaService: ReservaService
  ) { }
  getReserva(){
    this.reservaService.getReserva(this.reservaId).subscribe(Reserva=>{
      this.reservaDetail = Reserva;
    })
  }

  selectedProfesor(profesor:Profesor):void{
    this.profesor = profesor;
    this.profesorSelected = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.profesorSelected = false;
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
