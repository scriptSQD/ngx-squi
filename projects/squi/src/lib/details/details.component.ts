import { Component, Input } from '@angular/core';

@Component({
  selector: 'squi-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss', '../../../styles/styles.scss'],
})
export class DetailsComponent {
  constructor() {}

  @Input('squi-details-summary') summary!: string;

  @Input('squi-details-full') full!: string;
}
