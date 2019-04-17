import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationProperties {
  public viewDateFormat = 'DD-MMM-YYYY';
  public saveDateFormat = 'YYYY-MM-DD';
  public datePipeFormat = 'dd-MMM-yyyy';
}
