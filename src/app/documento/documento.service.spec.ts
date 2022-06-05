/* tslint:disable:no-unused-variable */

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { DocumentoService } from './documento.service';

describe('Service: Documento', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [DocumentoService]
    });
  });

  it('should ...', inject([DocumentoService], (service: DocumentoService) => {
    expect(service).toBeTruthy();
  }));
});
