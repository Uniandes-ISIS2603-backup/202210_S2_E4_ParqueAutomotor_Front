/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { MantenimientoService } from './mantenimiento.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { MantenimientoListComponent } from './mantenimiento-list/mantenimiento-list.component';
import { Mantenimiento } from './mantenimiento';

describe('Service: Mantenimiento', () => {

  let component: MantenimientoListComponent;
  let fixture: ComponentFixture<MantenimientoListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MantenimientoListComponent],
      providers: [MantenimientoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
