import { Component, Input, OnInit } from '@angular/core';
import { Reserva } from '../Reserva';

@Component({
  selector: 'app-reserva-detail',
  templateUrl: './reserva-detail.component.html',
  styleUrls: ['./reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {

  @Input() reservaDetail!:Reserva
  constructor() { }

  ngOnInit() {
  }

}
