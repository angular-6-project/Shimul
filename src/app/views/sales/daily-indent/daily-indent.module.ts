import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DailyIndentRoutingModule } from './daily-indent-routing.module';
import { CommonModule } from '@angular/common';

import { RecordIndentComponent } from './record-indent/record-indent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DailyIndentRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [RecordIndentComponent]
})
export class DailyIndentModule { }
