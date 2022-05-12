import { Profesor } from "./profesor";

export class ProfesorDetail extends Profesor {
  constructor(id: number,
    name: string,
    telefono: string,
    correo: string,
    foto: string
    //reservas:Array<Reserva>
    )
    {
      super (id,name,telefono,correo,foto);
      //this.reserva=reservas
    }
}
