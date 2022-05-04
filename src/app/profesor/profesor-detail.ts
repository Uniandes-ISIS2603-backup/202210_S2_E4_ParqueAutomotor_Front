import { Profesor } from "./profesor";

export class ProfesorDetail extends Profesor {
  constructor(id: number,
    nombre: string,
    telefono: string,
    correo: string,
    foto: string
    //reservas:Array<Reserva>
    )
    {
      super (id,nombre,telefono,correo,foto);
      //this.reserva=reservas
    }
}
