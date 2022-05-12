import { Reserva } from "./Reserva";
import { Conductor } from "../conductor/conductor";
import { Estudiante } from "../estudiante/estudiante";
import { Profesor } from "../profesor/profesor";
import { Vehiculo } from "../vehiculo/vehiculo";
export class ReservaDetail extends Reserva{

  estudiantes: Array<Estudiante>=[];

  constructor(id:number,activa:boolean,fechaHoraReservada: any,fechaHoraEfectuada: any,lugarDestino:string,descripcion: string,profesor: Profesor,estudiantes: Array<Estudiante>, vehiculo: Vehiculo,conductor: Conductor )
  {
    super(id,activa,fechaHoraReservada,fechaHoraEfectuada,lugarDestino,descripcion,profesor, vehiculo,conductor );
    this.estudiantes = estudiantes;
  }
}
