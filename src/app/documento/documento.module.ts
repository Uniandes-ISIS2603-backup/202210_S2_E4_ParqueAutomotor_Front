import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoDetailComponent } from './documento-detail/documento-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DocumentoDetailComponent],
  exports: [DocumentoDetailComponent]
})
export class DocumentoModule { }
