/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConductorDetailComponent } from './conductor-detail.component';
import { ConductorDetail } from '../conductor-detail';
import faker from '@faker-js/faker';
import { Reserva } from 'src/app/reserva/Reserva';

describe('ConductorDetailComponent', () => {
  let component: ConductorDetailComponent;
  let fixture: ComponentFixture<ConductorDetailComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorDetailComponent);
    component = fixture.componentInstance;
    component.conductorDetail = 
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
          []
        )]
      )
    ;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(debugElement.query(By.css('img')).attributes['alt']).toEqual(
      component.conductorDetail.nombre?.toString()
    );
  });
});
