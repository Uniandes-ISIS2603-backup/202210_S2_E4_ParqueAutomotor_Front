import { Reserva } from "../reserva/Reserva";
import { Conductor } from "./conductor";

export class ConductorDetail extends Conductor {
  reservas: Reserva[];
  constructor(id: number, foto: String, nombre: String, identificacion: String, reservas: Reserva[]) {
    super(id, foto, nombre, identificacion);
    this.reservas = reservas;
  }

}
