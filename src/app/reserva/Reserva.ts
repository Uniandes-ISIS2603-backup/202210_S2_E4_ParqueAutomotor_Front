import { Estudiante } from "../estudiante/estudiante";

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

constructor(id:number,activa:boolean,fechaHoraReservada: any,fechaHoraEfectuada: any,lugarDestino:string,descripcion: string,estudiantes: Array<Estudiante> )
{
  this.id = id;
  this.activa = activa;
  this.fechaHoraEfectuada = fechaHoraEfectuada;
  this.fechaHoraReservada = fechaHoraReservada;
  this.lugarDestino = lugarDestino;
  this.descripcion=descripcion;
  this.estudiantes = estudiantes;
}

}
