import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FormatPipe } from './format.pipe';

@NgModule({
  declarations: [
    ModalComponent,
    FormatPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    FormatPipe
  ]
})
export class SharedModule { }
