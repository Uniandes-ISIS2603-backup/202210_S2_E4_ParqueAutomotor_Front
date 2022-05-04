export class Profesor {
  id: number;
  nombre: string;
  telefono: string;
  correo: string;
  foto: string;

  constructor(id: number,
    nombre: string,
    telefono: string,
    correo: string,
    foto: string){
      this.id=id;
      this.nombre=nombre;
      this.telefono=telefono;
      this.correo=correo;
      this.foto=foto;
    }
}
