import { NgModule } from '@angular/core';
import { RadioComponent } from './radio/radio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [RadioComponent, DetailsComponent, ButtonComponent],
  imports: [ReactiveFormsModule, CommonModule],
  exports: [RadioComponent, DetailsComponent, ButtonComponent],
})
export class SquiModule {}
