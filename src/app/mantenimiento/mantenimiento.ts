export class Mantenimiento {
  nombreTaller: string;
  descripcionMantenimiento: string;
  fechaMantenimiento: any;
  //vehiculo: Vehiculo
  constructor(nombreTaller:string,descripcionMantenimiento:string,fechaMantenimiento:any){
    this.nombreTaller=nombreTaller;
    this.descripcionMantenimiento=descripcionMantenimiento;
    this.fechaMantenimiento=fechaMantenimiento;
  }
}

