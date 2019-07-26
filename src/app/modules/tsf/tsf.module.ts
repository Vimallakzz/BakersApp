import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TsfRoutingModule } from './tsf-routing.module';
import { TsfListComponent } from './pages/tsf-list/tsf-list.component';
import { TsfCreateComponent } from './pages/tsf-create/tsf-create.component';

@NgModule({
  declarations: [TsfListComponent, TsfCreateComponent],
  imports: [
    CommonModule,
    TsfRoutingModule
  ]
})
export class TsfModule { }
