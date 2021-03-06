import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reserva } from './Reserva';
import { Observable } from 'rxjs';
import { ReservaDetail } from './Reserva-detail';
import { Estudiante } from '../estudiante/estudiante';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
private apiUrl: string = environment.baseUrl + '/reservas';
private apiUrlEstudiantes: string = environment.baseUrl + '/estudiantes';
constructor(private http: HttpClient) { }


getReservas(): Observable<Reserva[]>{
  return this.http.get<Reserva[]>(this.apiUrl);
}
getReserva(id: string): Observable<ReservaDetail> {
  return this.http.get<ReservaDetail>(this.apiUrl + "/" + id);
}
getEstudiantes(id: string):Observable<ReservaDetail[]>{
  return this.http.get<ReservaDetail[]>(this.apiUrlEstudiantes+ "/" +id + "/reservas" );
}

}

