import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConductorDetailComponent } from './conductor-detail/conductor-detail.component';
import { ConductorListComponent } from './conductor-list/conductor-list.component';

const routes: Routes = [{
 path: 'conductores',
 children: [
   {
     path: 'list',
     component: ConductorListComponent
   },
   {
     path: ':id',
     component: ConductorDetailComponent
   },
 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ComductorRoutingModule {}
