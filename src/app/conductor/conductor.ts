export class Conductor {
  id:number;
  foto:String;
  nombre:String;
  identificacion:String;
  constructor( id:number,foto:String,nombre:String,identificacion:String){
    this.foto = foto;
    this.id = id;
    this.nombre = nombre;
    this.identificacion = identificacion;
  }
}
