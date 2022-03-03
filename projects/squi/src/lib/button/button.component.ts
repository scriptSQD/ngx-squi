import { Component, Input } from '@angular/core';

@Component({
  selector: 'squi-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss', '../../../styles/styles.scss'],
})
export class ButtonComponent {
  @Input('squi-href') href!: string;
  @Input('squi-label') label!: string;
  @Input('squi-color') color!: string;
}
