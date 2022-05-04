export class Documento {
  tipo: string;
  fotografia: string;
  fechaDeExpedicion: any;
  fechaDeVencimiento: any;
  constructor(tipo: string,
    fotografia: string,
    fechaDeExpedicion: any,
    fechaDeVencimiento: any){
      this.tipo=tipo;
      this.fotografia=fotografia;
      this.fechaDeExpedicion=fechaDeExpedicion;
      this.fechaDeVencimiento=fechaDeVencimiento;

  }
}
