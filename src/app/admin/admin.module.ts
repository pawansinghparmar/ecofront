import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmnComponent } from './admn/admn.component';

@NgModule({
  declarations: [AdmnComponent],
  imports: [
    CommonModule
  ],
  exports:[AdminModule]
})
export class AdminModule { }
