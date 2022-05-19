import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiculoDetailComponent } from './vehiculo-detail/vehiculo-detail.component';
import { VehiculoListComponent } from './vehiculo-list/vehiculo-list.component';

const routes: Routes = [{
  path:'vehiculos',
  children:[
    {
      path: 'list',
      component: VehiculoListComponent
    },
    {
      path: ':id',
      component: VehiculoDetailComponent
    },
  ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class VehiculoRoutingModule{};
