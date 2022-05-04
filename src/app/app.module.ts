import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import { ProfesorModule } from './profesor/profesor.module';
import { DocumentoModule } from './documento/documento.module';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
