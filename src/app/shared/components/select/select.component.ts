import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
 /**
   * TO Integrate Select component some required keys as follows
   * group - form group which you want to integrate app select
   * name - form control name to integrate it
   * options - list of dropdown values
   * labelKey - must to display in dropdown label key, otherwise it shows empty rows
   * isWhole - used to map whole object or else want to map id
   *  example
   *  isWhole = false, [--name--] : [--valuekey--]
   *  isWhole = false, [--name--] : {--complete object --}
   * Example:
   * 1.Multi-select with bind id, eg. [1,2,3]. Inorder to bind whole object pass isWhole="true"
   *  <app-select name="role" label="Add Role" required="true" [isFormSubmitted]="submitted"
        [options]="items" labelKey="name" [multiple]="true" valueKey="id" [group]="sampleForm" (change)="onSubmit($event)">
   *  </app-select>
   *
   * 2.Single-select with bind id, eg. 21. Inorder to bind whole object pass isWhole="true"
   *  <app-select name="role" label="Add Role" required="true" [isFormSubmitted]="submitted"
        [options]="items" labelKey="name" [multiple]="false" valueKey="id" [group]="sampleForm" (change)="onSubmit($event)">
   *  </app-select>
   *
   */
  @Input() group: FormGroup;

  @Input() name: string;
  @Input() label: string;
  @Input() options: any[];
  @Input() labelKey: string;
  @Input() valueKey: string;
  @Input() required = false;
  @Input() multiple: boolean;
  @Input() isWhole = false;
  @Input() clearable: boolean;
  @Input() isFormSubmitted: boolean;
  @Input() modelValue: string;

  @Output() public modelValueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() public change: EventEmitter<any> = new EventEmitter();

  get form() {
    return this.group.controls;
  }

  constructor(public formBuilder: FormBuilder) {
  }

  ngOnInit() {
    if (!this.group) {
      this.group = this.formBuilder.group({ [this.name]: [this.modelValue || null] });
    }
  }

  onChange(value) {
    this.change.emit(value);
    this.modelValueChange.emit(value);
  }
}
