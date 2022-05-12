import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConductorListComponent,ConductorDetailComponent],
  exports: [ConductorListComponent]
})
export class ConductorModule { }
