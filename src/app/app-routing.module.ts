import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Main_pageComponent } from './main_page/main_page.component';

const routes: Routes = [{
  path: 'main',
  children: [
    {
      path: 'main_page',
      component: Main_pageComponent
    }
  ]
 }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
