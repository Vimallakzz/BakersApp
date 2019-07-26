import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BakerListComponent } from './pages/baker-list/baker-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: BakerListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BakerRoutingModule { }
