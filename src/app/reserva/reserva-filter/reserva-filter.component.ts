import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reserva-filter',
  templateUrl: './reserva-filter.component.html',
  styleUrls: ['./reserva-filter.component.css']
})
export class ReservaFilterComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  mostrar_fecha: boolean = false;
  mostrar_conductor: boolean = false;

  conductor!: number;
  today!: Date;
  constructor() { }

  sendNotification(message: string,valor:any): void {
    if (message == "fecha" && valor == null) {
      this.mostrar_conductor = false;
      this.mostrar_fecha = true;
    }

    if (message == "fecha" && valor != null) {
      valor=(<HTMLTextAreaElement>valor.target).value
      this.mostrar_conductor = false;
      this.mostrar_fecha = true;
      this.today = valor;
    }

    if(message =="conductor" && valor == null)
    {
      this.mostrar_fecha = false;
      this.mostrar_conductor = true;
    }

    if(message =="conductor" && valor != null)
    {
      valor=(<HTMLTextAreaElement>valor.target).value
      this.mostrar_fecha = false;
      this.mostrar_conductor = true;
      this.conductor = valor;
    }
  }

  executeFilter(message:string): void {
    if( message == "fecha") {
      this.notifyParent.emit([message,this.today]);
    }

    if(message == "conductor")
    {
      this.notifyParent.emit([message,this.conductor]);
    }

    if( message == "restablecer") {
      this.notifyParent.emit([message]);
    }

  }

  ngOnInit() {
  }

}
