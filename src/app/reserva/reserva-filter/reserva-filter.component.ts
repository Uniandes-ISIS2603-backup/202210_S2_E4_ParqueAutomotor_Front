import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reserva-filter',
  templateUrl: './reserva-filter.component.html',
  styleUrls: ['./reserva-filter.component.css']
})
export class ReservaFilterComponent implements OnInit {
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();
  mostrar_fecha: boolean = false;
  today!: Date;
  constructor() { }

  sendNotification(message: string,valor:any): void {
    if (message == "fecha" && valor == null) {
      this.mostrar_fecha = true;
    }

    if (message == "fecha" && valor != null) {
      valor=(<HTMLTextAreaElement>valor.target).value
      this.mostrar_fecha = true;
      this.today = valor;
      console.log("Entre a enviar el mensaje" + this.today);
    }

  }

  executeFilter(message:string): void {
    if( message == "fecha") {
      this.notifyParent.emit([message,this.today]);
    }

    if( message == "restablecer") {
      this.notifyParent.emit([message]);
    }

  }

  ngOnInit() {
  }

}
