import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule, BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap';

import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { ApplicationProperties } from '../constants/app.properties';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [InputComponent, SelectComponent, DatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
    }),
  ],
  exports: [
    InputComponent,
    SelectComponent,
    DatePickerComponent,

    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    TooltipModule,
    BsDatepickerModule
  ],
  providers: [ApplicationProperties, { provide: BsDatepickerConfig, useFactory: getDatepickerConfig }]
})
export class SharedModule { }
