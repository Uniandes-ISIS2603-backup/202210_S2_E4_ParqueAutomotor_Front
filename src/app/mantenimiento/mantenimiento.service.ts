import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Mantenimiento } from './mantenimiento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  private apiUrl: string = environment.baseUrl + '/vehiculos/1/mantenimientos';

  constructor(private http: HttpClient) { }

  getMantenimiento(id: string): Observable<Mantenimiento> {
    return this.http.get<Mantenimiento>(this.apiUrl + "/" + id);
  }

  getMantenimientos(): Observable<Mantenimiento[]>{
  return this.http.get<Mantenimiento[]>(this.apiUrl);
  }
}
