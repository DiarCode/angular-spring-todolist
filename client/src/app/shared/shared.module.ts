import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LabelComponent } from '@ui/label/label.component';
import { InputComponent } from '@ui/input/input.component';
import { ButtonComponent } from '@ui/button/button.component';
import { LayoutComponent } from '@shared/layout/layout.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    LabelComponent,
    LayoutComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent, ButtonComponent, LabelComponent, LayoutComponent],
})
export class SharedModule {}
