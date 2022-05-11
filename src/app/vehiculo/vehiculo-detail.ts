import { Documento } from "../documento/documento";
import { Mantenimiento } from "../mantenimiento/mantenimiento";
import { Reserva } from "../reserva/Reserva";

import { Vehiculo } from "./vehiculo";

export class VehiculoDetail extends Vehiculo {

  reservas: Reserva[];
  mantenimientos: Mantenimiento[];
  documentos: Documento[];

  constructor( id:number, marca:string, placa:string, modelo:string,
    tipo:string, capacidadPasajeros:number, reservas:Reserva[],
     mantenimientos:Mantenimiento[], documentos:Documento[]) {
      super(id, marca, placa, modelo, tipo, capacidadPasajeros);
      this.reservas = reservas;
      this.mantenimientos = mantenimientos;
      this.documentos = documentos;
  }

}
