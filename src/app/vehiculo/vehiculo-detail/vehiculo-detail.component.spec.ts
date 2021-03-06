/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VehiculoDetailComponent } from './vehiculo-detail.component';
import faker from '@faker-js/faker';
import { Conductor } from 'src/app/conductor/conductor';
import { Profesor } from 'src/app/profesor/profesor';
import { Vehiculo } from '../vehiculo';
import { Reserva } from 'src/app/reserva/Reserva';
import { VehiculoDetail } from '../vehiculo-detail';
import { Mantenimiento } from 'src/app/mantenimiento/mantenimiento';
import { Documento } from 'src/app/documento/documento';

describe('VehiculoDetailComponent', () => {
  let component: VehiculoDetailComponent;
  let fixture: ComponentFixture<VehiculoDetailComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculoDetailComponent);
    component = fixture.componentInstance;
 
    component.vehiculoDetail =
      new VehiculoDetail(
        faker.datatype.number(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),

    [
      new Reserva(
        faker.datatype.number(),
        faker.datatype.boolean(),
        faker.date.past(),
        faker.date.past(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        new Profesor( 
          faker.datatype.number(),
          faker.name.firstName(),
          faker.phone.phoneNumber(),
          faker.internet.email(),
          faker.image.imageUrl()
        ),
        new Vehiculo(
          faker.datatype.number(),
          faker.image.imageUrl(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number()
        ),
        new Conductor(
          faker.datatype.number(),
          faker.image.imageUrl(),
          faker.name.firstName(),
          faker.phone.phoneNumber()
        )
      )]
    ,
    [
      new Mantenimiento(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.date.past(),
        new Vehiculo(
          faker.datatype.number(),
          faker.image.imageUrl(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number()
        )
      )
        ],
        [ new Documento(
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.image.imageUrl(),
          faker.date.past(),
          faker.date.past(),
          new Vehiculo(
            faker.datatype.number(),
            faker.image.imageUrl(),
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            faker.lorem.sentence(),
            faker.datatype.number()
          )
        )
        ]

      );

    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(debugElement.query(By.css('img')).attributes['alt']).toEqual(
      component.vehiculoDetail.placa?.toString()
    );
  });
});
