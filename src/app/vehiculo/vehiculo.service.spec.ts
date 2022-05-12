/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { VehiculoService } from './vehiculo.service';

describe('Service: Vehiculo', () => {
  let service: VehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiculoService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject( VehiculoService );
  });

  it('should ...', inject([VehiculoService], (service: VehiculoService) => {
    expect(service).toBeTruthy();
  }));

  describe('Service: Vehiculo', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getVehiculos().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('http://localhost:8080/api/vehiculos');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
