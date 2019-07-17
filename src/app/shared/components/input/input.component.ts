import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  /**
   * group => To build reactive input field with corresponding formgroup
   * type  => input type
   * name  => name of input field / also formControlName to bind data to formgroup(group) here
   * label => label of input field
   * isFormSubmitted => to show validation messages while form submitting
   *
   * Example:
   * <app-input type="text" name="name" label="First Name" required="true" [isFormSubmitted]="submitted" [group]="sampleForm" ></app-input>
   */
  @Input() group: FormGroup;
  @Input() type: string;
  @Input() name: string;
  @Input() label: string;
  @Input() required: boolean;
  @Input() isFormSubmitted: boolean;
  @Input() modelValue: string;
  @Input() isEdit = true;
  @Input() isErrorOnChange = false;
  @Output() public modelValueChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() handleFocus: EventEmitter<any> = new EventEmitter<any>();
  @Output() handleBlur: EventEmitter<any> = new EventEmitter<any>();
  @Output() public change: EventEmitter<any> = new EventEmitter();

  get form() {
    return this.group.controls;
  }

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit() {
    if (!this.group) {
      this.group = this.formBuilder.group({ [this.name]: [this.modelValue || null] });
    }
  }

  onFocus(evt: any) {
    this.handleFocus.emit(evt);
  }

  onBlur(evt: any) {
    this.handleBlur.emit(evt);
  }

  onValueChange(evt: any) {
    this.change.emit(evt.target.value);
    this.modelValueChange.emit(evt.target.value);
  }
}
