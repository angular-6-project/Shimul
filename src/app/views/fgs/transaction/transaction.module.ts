import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule } from '@angular/common';
import { ReceiptsComponent } from './receipts/receipts.component';
import { TransactionRoutingModule } from './transactoin-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TransactionRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    ReceiptsComponent
  ]
})
export class TransactionModule { }
