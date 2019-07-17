import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationProperties {
  public viewDateFormat = 'DD-MMM-YYYY';
  public saveDateFormat = 'YYYY-MM-DD';
  public datePipeFormat = 'dd-MMM-yyyy';
  public viewMonthFormat = 'MMM-YYYY';
  public viewYearFormat = 'YYYY';
  public saveMonthFormat = 'YYYY-MM';
  public saveYearFormat = 'YYYY';
  public monthPipeFormat = 'MMM-yyyy';
  public yearPipeFormat = 'yyyy';
}
