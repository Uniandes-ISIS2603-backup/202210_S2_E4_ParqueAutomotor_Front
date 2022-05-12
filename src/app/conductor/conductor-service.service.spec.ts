
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ConductorServiceService } from './conductor-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('ConductorServiceService', () => {
  let service: ConductorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,HttpClientModule],
      providers: [ConductorServiceService]
    });
    service = TestBed.inject(ConductorServiceService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('Service: conductor', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getConductores().subscribe(res => {
        expect(res).toEqual([]);
      });
      const req = httpTestingController.expectOne('http://localhost:8080/api/conductores');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
