import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComplaintRoutingModule } from './complaint-routing.module';
import { ComplaintListComponent } from './pages/complaint-list/complaint-list.component';
import { ComplaintCreateComponent } from './pages/complaint-create/complaint-create.component';

@NgModule({
  declarations: [ComplaintListComponent, ComplaintCreateComponent],
  imports: [
    CommonModule,
    ComplaintRoutingModule
  ]
})
export class ComplaintModule { }
