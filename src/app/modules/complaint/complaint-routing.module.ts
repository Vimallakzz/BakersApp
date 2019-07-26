import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComplaintListComponent } from './pages/complaint-list/complaint-list.component';
import { ComplaintCreateComponent } from './pages/complaint-create/complaint-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: ComplaintListComponent
  },
  {
    path: 'create',
    component: ComplaintCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplaintRoutingModule { }
