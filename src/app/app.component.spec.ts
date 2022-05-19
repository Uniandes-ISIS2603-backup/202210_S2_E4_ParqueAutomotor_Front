import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ConductorListComponent } from './conductor/conductor-list/conductor-list.component';
import { MantenimientoListComponent } from './mantenimiento/mantenimiento-list/mantenimiento-list.component';
import { ReservaDetailComponent } from './reserva/reserva-detail/reserva-detail.component';
import { VehiculoListComponent } from './vehiculo/vehiculo-list/vehiculo-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        MantenimientoListComponent,
        ConductorListComponent,
        VehiculoListComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'parqueAutomotor-front'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('parqueAutomotor-front');
  });

});
