export class Profesor {
  id: number;
  name: string;
  telefono: string;
  correo: string;
  foto: string;

  constructor(id: number,
    name: string,
    telefono: string,
    correo: string,
    foto: string){
      this.id=id;
      this.name=name;
      this.telefono=telefono;
      this.correo=correo;
      this.foto=foto;
    }
}
