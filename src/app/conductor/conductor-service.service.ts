import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conductor } from './conductor';

@Injectable({
  providedIn: 'root'
})
export class ConductorServiceService {

  private apiUrl: string = environment.baseUrl + '/conductores';

  constructor(private http: HttpClient) { }

  getConductores(): Observable<Conductor[]>{
  return this.http.get<Conductor[]>(this.apiUrl);
  }
}
