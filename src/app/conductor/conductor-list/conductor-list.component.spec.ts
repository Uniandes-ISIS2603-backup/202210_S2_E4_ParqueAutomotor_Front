/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConductorListComponent } from './conductor-list.component';
import faker from '@faker-js/faker';
import { Conductor } from '../conductor';
import { HttpClientModule } from '@angular/common/http';

describe('ConductorListComponent', () => {
  let component: ConductorListComponent;
  let fixture: ComponentFixture<ConductorListComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConductorListComponent],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorListComponent);
    component = fixture.componentInstance;


    component.conductores = [
      new Conductor(
        faker.datatype.number(),
        faker.image.imageUrl(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
      )
    ];
    
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should have an img element ', () => {
    expect(debugElement.query(By.css('img')).attributes['alt']).toEqual(component.conductores[0].nombre?.toString());
  });
});
