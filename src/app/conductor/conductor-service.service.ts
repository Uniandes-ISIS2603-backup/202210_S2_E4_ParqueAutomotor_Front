import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conductor } from './conductor';
import { ConductorDetail } from './conductor-detail';

@Injectable({
  providedIn: 'root'
})
export class ConductorServiceService {

  private apiUrl: string = environment.baseUrl + '/conductores';

  constructor(private http: HttpClient) { }

  getConductores(): Observable<ConductorDetail[]>{
  return this.http.get<ConductorDetail[]>(this.apiUrl);
  }
}
