export class Vehiculo {

  id: number;
  foto: string;
  marca: string;
  placa: string;
  modelo: string;
  tipo: string;
  capacidadPasajeros: number;

  constructor( id:number, foto: string, marca:string, placa:string, modelo:string,
            tipo:string, capacidadPasajeros:number){
    this.id = id;
    this.foto = foto;
    this.marca = marca;
    this.placa = placa;
    this.modelo = modelo;
    this.tipo = tipo;
    this.capacidadPasajeros = capacidadPasajeros;
  }
}
