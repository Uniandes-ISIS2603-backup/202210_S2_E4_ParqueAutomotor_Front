export class Vehiculo {

  id: number;
  marca: string;
  placa: string;
  modelo: string;
  tipo: string;
  capacidadPasajeros: number;

  constructor( id:number, marca:string, placa:string, modelo:string,
            tipo:string, capacidadPasajeros:number){
    this.id = id;
    this.marca = marca;
    this.placa = placa;
    this.modelo = modelo;
    this.tipo = tipo;
    this.capacidadPasajeros = capacidadPasajeros;
  }
}
