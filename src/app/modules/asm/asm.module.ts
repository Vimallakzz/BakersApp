import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsmRoutingModule } from './asm-routing.module';
import { AsmListComponent } from './pages/asm-list/asm-list.component';
import { AsmCreateComponent } from './pages/asm-create/asm-create.component';

@NgModule({
  declarations: [AsmListComponent, AsmCreateComponent],
  imports: [
    CommonModule,
    AsmRoutingModule
  ]
})
export class AsmModule { }
