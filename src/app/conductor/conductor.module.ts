import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConductorListComponent } from './conductor-list/conductor-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConductorListComponent],
  exports: [ConductorListComponent]
})
export class ConductorModule { }
