import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule, BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap';

import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ApplicationProperties } from '../constants/app.properties';

/**
 * This function getDatepickerConfig sets global configuration for ngx-bootstrap
 * Datepicker.
 * it sets dateInputFormat for whole application
 */
export function getDatepickerConfig(): BsDatepickerConfig {
  return Object.assign(new BsDatepickerConfig(), {
    dateInputFormat: new ApplicationProperties().viewDateFormat
  });
}

@NgModule({
  declarations: [InputComponent, SelectComponent, DatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports: [
    InputComponent,
    SelectComponent,
    DatePickerComponent,

    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TooltipModule,
    BsDatepickerModule
  ],
  providers: [ApplicationProperties, { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }]
})
export class SharedModule { }
