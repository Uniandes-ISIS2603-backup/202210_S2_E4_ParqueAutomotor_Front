
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { VehiculoService } from './vehiculo.service';

describe('VehiculoService', () => {
  let service: VehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehiculoService]
    });
    service = TestBed.inject(VehiculoService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('Service: vehiculo', () => {
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
