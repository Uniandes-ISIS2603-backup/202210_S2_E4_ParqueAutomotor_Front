import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vehiculo-filter',
  templateUrl: './vehiculo-filter.component.html',
  styleUrls: ['./vehiculo-filter.component.css']
})
export class VehiculoFilterComponent implements OnInit {

  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  today!: Date;
  cantidad!: number;
  mostrar_fecha: boolean = false;
  mostrar_mas_reservas: boolean = false;

  sendNotification(message: string,valor:any): void {
      // if( message == "fecha" && valor != null) {
      //   valor=(<HTMLTextAreaElement>valor.target).value
      //   this.today=valor;
      //   this.mostrar_mas_reservas = false;
      // }
      // if (message == "fecha" && valor == null) {
      //   this.mostrar_fecha = true;
      //   this.mostrar_mas_reservas = false;
      // }
      if (message == "mas_reservas" && valor != null) {
        this.notifyParent.emit([message,valor]);
        this.mostrar_fecha = false;
      }
      if (message == "mas_reservas" && valor == null) {
        this.mostrar_mas_reservas = true;
        this.mostrar_fecha = false;
      }
  }

  executeFilter(message:string): void {
    // if( message == "fecha") {
    //   this.notifyParent.emit([message,this.today]);
    // }

    if (message == "mas_reservas" || message=='Restablecer') {
      this.notifyParent.emit([message]);
    }
    if (message == "restablecer") {
      this.notifyParent.emit([message]);
    }
  }
  constructor() {
    this.today =new Date();
  }

  ngOnInit() {
  }

}
