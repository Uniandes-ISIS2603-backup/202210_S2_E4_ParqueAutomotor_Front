import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { ProfesorModule } from './profesor/profesor.module';
import { DocumentoModule } from './documento/documento.module';
import { ConductorModule } from './conductor/conductor.module';
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { ReservaModule } from './reserva/reserva.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MantenimientoModule,
    EstudianteModule,
    ProfesorModule,
    DocumentoModule,
    HttpClientModule,
    ConductorModule,
    VehiculoModule,
    ReservaModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
