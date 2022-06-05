import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Documento } from './documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {

private apiUrl: string = environment.baseUrl + '/vehiculos/1/documentos';

constructor(private http: HttpClient) { }

getDocumento(id: string): Observable<Documento> {
  return this.http.get<Documento>(this.apiUrl + "/" + id);
}

}
