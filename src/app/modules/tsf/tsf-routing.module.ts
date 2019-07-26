import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TsfListComponent } from './pages/tsf-list/tsf-list.component';
import { TsfCreateComponent } from './pages/tsf-create/tsf-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: TsfListComponent
  },
  {
    path: 'create',
    component: TsfCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TsfRoutingModule { }
