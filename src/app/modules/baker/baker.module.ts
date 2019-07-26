import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BakerRoutingModule } from './baker-routing.module';
import { BakerListComponent } from './pages/baker-list/baker-list.component';

@NgModule({
  declarations: [BakerListComponent],
  imports: [
    CommonModule,
    BakerRoutingModule
  ]
})
export class BakerModule { }
