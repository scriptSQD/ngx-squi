import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'squi-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss', '../../../styles/styles.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class RadioComponent {
  constructor() {}

  @Input('squi-label')
  label!: string;

  @Input('squi-value')
  value!: string;

  @Input('squi-form-control-name')
  formControlName!: string;
}
