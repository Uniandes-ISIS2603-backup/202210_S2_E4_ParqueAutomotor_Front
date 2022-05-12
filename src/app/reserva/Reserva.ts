import { Conductor } from "../conductor/conductor";
import { Estudiante } from "../estudiante/estudiante";
import { Profesor } from "../profesor/profesor";
import { Vehiculo } from "../vehiculo/vehiculo";

export class Reserva {

  //Primitivos
  id:number;
  activa:boolean;
  fechaHoraReservada: any;
  fechaHoraEfectuada: any;
  lugarDestino:string;
  descripcion: string;

  //Objetos
  estudiantes: Array<Estudiante>=[];
  profesor: Profesor;
  vehiculo: Vehiculo;
  conductor: Conductor;


constructor(id:number,activa:boolean,fechaHoraReservada: any,fechaHoraEfectuada: any,lugarDestino:string,descripcion: string,estudiantes: Array<Estudiante>,profesor: Profesor, vehiculo: Vehiculo,conductor: Conductor )
{
  this.id = id;
  this.activa = activa;
  this.fechaHoraEfectuada = fechaHoraEfectuada;
  this.fechaHoraReservada = fechaHoraReservada;
  this.lugarDestino = lugarDestino;
  this.descripcion=descripcion;
  this.estudiantes = estudiantes;
  this.profesor =  profesor;
  this.vehiculo = vehiculo;
  this.conductor = conductor;
}

}
