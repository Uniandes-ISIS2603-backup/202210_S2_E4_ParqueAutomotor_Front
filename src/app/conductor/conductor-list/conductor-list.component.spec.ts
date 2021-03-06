/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConductorListComponent } from './conductor-list.component';
import faker from '@faker-js/faker';
import { Conductor } from '../conductor';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { ConductorDetail } from '../conductor-detail';
import { Reserva } from 'src/app/reserva/Reserva';
import { Profesor } from 'src/app/profesor/profesor';
import { Vehiculo } from 'src/app/vehiculo/vehiculo';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReservaModule } from 'src/app/reserva/reserva.module';

describe('ConductorListComponent', () => {
  let component: ConductorListComponent;
  let fixture: ComponentFixture<ConductorListComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConductorListComponent,AppComponent],
      imports: [HttpClientTestingModule,RouterTestingModule,ReservaModule]
        
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorListComponent);
    component = fixture.componentInstance;
    component.conductores = [
      new ConductorDetail(
        faker.datatype.number(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        [new Reserva(
          faker.datatype.number(),
          faker.datatype.boolean(),
          faker.datatype.datetime,
          faker.datatype.datetime,
          faker.datatype.string(),
          faker.datatype.string(),
          new Profesor(faker.datatype.number(),
            faker.datatype.string(),
            faker.datatype.string(),
            faker.datatype.string(),
            faker.image.imageUrl()),
          new Vehiculo(faker.datatype.number(),
            faker.image.imageUrl(),
            faker.datatype.string(),
            faker.datatype.string(),
            faker.datatype.string(),
            faker.datatype.string(),
            faker.datatype.number()
          ),
          new Conductor(faker.datatype.number(),
            faker.image.imageUrl(),
            faker.datatype.string(),
            faker.datatype.string())
        )]
      )
    ];

    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should have an img element ', () => {
    expect(debugElement.query(By.css('img')).attributes['alt']).toEqual(component.conductores[0].nombre?.toString());
  });
});
