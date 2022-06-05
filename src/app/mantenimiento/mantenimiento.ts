import { Vehiculo } from "../vehiculo/vehiculo";

export class Mantenimiento {
  id:number;
  nombreTaller: string;
  descripcionMantenimiento: string;
  fechaMantenimiento: any;
  vehiculo: Vehiculo;
  constructor(id:number,nombreTaller:string,descripcionMantenimiento:string,fechaMantenimiento:any, vehiculo:Vehiculo){
    this.id = id;
    this.nombreTaller=nombreTaller;
    this.descripcionMantenimiento=descripcionMantenimiento;
    this.fechaMantenimiento=fechaMantenimiento;
    this.vehiculo = vehiculo;
  }
}

