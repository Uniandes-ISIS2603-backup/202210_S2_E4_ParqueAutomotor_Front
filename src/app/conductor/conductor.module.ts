import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConductorListComponent } from './conductor-list/conductor-list.component';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [ConductorListComponent,ConductorDetailComponent],
  exports: [ConductorListComponent]
})
export class ConductorModule { }
