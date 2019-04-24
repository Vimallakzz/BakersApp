import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as moment from 'moment';
import * as locales from 'ngx-bootstrap/locale';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ApplicationProperties } from 'src/app/constants/app.properties';

/**
 * In order to acheive localisation in ngx date picker, need to
 * import all possible locales of ngx-datepicker by import locales in
 * defineLocale([localecode], [locale-object])
 *
 */
function defineLocales() {
  // tslint:disable-next-line:forin
  for (const locale in locales) {
      defineLocale(locales[locale].abbr, locales[locale]);
  }
}
defineLocales();

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  /**
   * DatePickerComponent creates wrapper for ngx-bootstrap date picker.
   * It allows  to send Date format as "string | Date | moment.Moment", so that wrapper converts to required format. The following keys are
   * min / max / datesDisabled / modelValue / formGroupValue.
   * Refer ngx-bootstrap https://valor-software.com/ngx-bootstrap/#/datepicker#bs-datepicker-component
   *
   * group => To build reactive input field with corresponding formgroup
   * name  => name of input field / also formControlName to bind data to formgroup(group) here
   * label => label of input field
   * isFormSubmitted => to show validation messages while form submitting
   *
   * Example: Reactive forms
   * <app-date-picker name="date"  label="Date"  required="true" [group]="sampleForm" [min]="min" [max]="max"></app-date-picker>
   *
   * Example: Template driven forms
   * <app-date-picker name="date" label="Date" required="true" [(modelValue)]="startDate" [min]="min" [max]="max"></app-date-picker>
   *
   * Additional props : placement | theme | daysDisabled | datesDisabled || adaptivePosition
   *
   */
  public _min: Date;
  public _max: Date;
  public _datesDisabled: Date[];
  public bsValue: Date;
  public bsConfig: Partial<BsDatepickerConfig>;

  @Input() group: FormGroup;

  @Input() name: string;
  @Input() label: string;
  @Input() format: string;
  @Input() placeholder;
  @Input() required: boolean;
  @Input() isFormSubmitted: boolean;
  @Input() adaptivePosition: boolean;

  @Input() placement: 'top' | 'bottom' | 'left' | 'right';
  @Input() theme: 'theme-default' | 'theme-green' | 'theme-blue' | 'theme-dark-blue' | 'theme-red' | 'theme-orange';
  @Input() daysDisabled: number[];
  @Input() viewMode: 'day' | 'month' | 'year';

  @Input() modelValue: string | Date | moment.Moment;
  @Output() public modelValueChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set min(value: string | Date | moment.Moment) {
    this.dateConversion('_min', value);
  }
  @Input()
  set max(value: string | Date | moment.Moment) {
    this.dateConversion('_max', value);
  }
  @Input()
  set datesDisabled(arrayOfDates: any[]) {
    this._datesDisabled = arrayOfDates.map(date => {
      if (moment.isMoment(date)) {
        return date.toDate();
      } else if (date instanceof Date) {
        return date;
      } else if (typeof date === 'string') {
        return moment(date).toDate();
      }
    });
  }

  get form() {
    return this.group.controls;
  }


  constructor(public properties: ApplicationProperties, public formBuilder: FormBuilder) {
    if (!this.group) {
      this.group = this.formBuilder.group({ [this.name]: [null] });
    }
  }

  ngOnInit() {
    const fieldValue = this.group.value[this.name] || this.modelValue;
    if (fieldValue) {
      this.setBsValue(fieldValue);
    }

    this.bsConfig = {
      containerClass: this.theme || 'theme-default',
      minMode: this.viewMode || 'day',
      selectFromOtherMonth: true,
      selectWeek: false,
      showWeekNumbers: false,
      adaptivePosition: this.adaptivePosition || false,
      dateInputFormat: this.format || this.properties.viewDateFormat
    };
  }

  dateConversion(key: string, value: string | Date | moment.Moment) {
    if (moment.isMoment(value)) {
      this[key] = value.toDate();
    } else if (value instanceof Date) {
      this[key] = value;
    } else {
      this[key] = moment(value).toDate();
    }
  }

  setBsValue(value: string | Date | moment.Moment) {
    this.dateConversion('bsValue', value);
  }
  /**
   * ngx-bootstrap date picker output value is always Date type.
   * so that we converts to required saveDateFormat.
   */
  onValueChange(value: Date): void {
    if (value) {
      setTimeout(() => {
        this.group.patchValue({[this.name]: moment(value).format(this.properties.saveDateFormat)});
        this.bsValue = value;
        this.modelValueChange.emit(moment(value).format(this.properties.saveDateFormat));
      });
    }
  }
}
