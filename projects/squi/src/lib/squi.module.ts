import { NgModule } from '@angular/core';
import { SquiComponent } from './squi.component';
import { RadioComponent } from './radio/radio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [SquiComponent, RadioComponent, DetailsComponent],
  imports: [ReactiveFormsModule],
  exports: [SquiComponent, RadioComponent, DetailsComponent],
})
export class SquiModule {}
