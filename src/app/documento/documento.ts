import { Vehiculo } from "../vehiculo/vehiculo";

export class Documento {
  id:number;
  tipo: string;
  fotografia: string;
  fechaDeExpedicion: any;
  fechaDeVencimiento: any;
  vehiculo: Vehiculo
    constructor(id:number,
    tipo: string,
    fotografia: string,
    fechaDeExpedicion: any,
    fechaDeVencimiento: any,
    vehiculo: Vehiculo){
      this.id = id;
      this.tipo=tipo;
      this.fotografia=fotografia;
      this.fechaDeExpedicion=fechaDeExpedicion;
      this.fechaDeVencimiento=fechaDeVencimiento;
      this.vehiculo = vehiculo;
  }
}
