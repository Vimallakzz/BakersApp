import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsmListComponent } from './pages/asm-list/asm-list.component';
import { AsmCreateComponent } from './pages/asm-create/asm-create.component';

const routes: Routes = [
  {
    path: 'list',
    component: AsmListComponent
  },
  {
    path: 'create',
    component: AsmCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsmRoutingModule { }
