import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [InputComponent, SelectComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TooltipModule.forRoot()
  ],
  exports: [
    InputComponent,
    SelectComponent,

    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TooltipModule
  ]
})
export class SharedModule { }
