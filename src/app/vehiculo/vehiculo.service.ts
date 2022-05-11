import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private apiUrl: string = environment.baseUrl + '/vehiculos';

  constructor(private http: HttpClient) { }

  getVehiculos(): Observable<Vehiculo[]>{
  return this.http.get<Vehiculo[]>(this.apiUrl);
  }
}
