import { Reserva } from "./Reserva";
import { Conductor } from "../conductor/conductor";
import { Estudiante } from "../estudiante/estudiante";
import { Profesor } from "../profesor/profesor";
import { Vehiculo } from "../vehiculo/vehiculo";
export class ReservaDetail extends Reserva{

  estudiantes: Array<Estudiante>=[];

  constructor(id:number,activa:boolean,fechaHoraReservada: any,fechaHoraEfectuada: any,lugarDestino:string,descripcion: string,estudiantes: Array<Estudiante>,profesor: Profesor, vehiculo: Vehiculo,conductor: Conductor )
  {
    super(id,activa,fechaHoraReservada,fechaHoraEfectuada,lugarDestino,descripcion,estudiantes,profesor, vehiculo,conductor );
    this.estudiantes = estudiantes;
  }
}
