import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


import { MasterRoutingModule } from './master-routing.module';

import { CommonModule } from '@angular/common';

import { AddProductComponent } from './products/add-product/add-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { AddPacketComponent } from './packets/add-packet/add-packet.component';
import { ListPacketComponent } from './packets/list-packet/list-packet.component';
import { EditPacketComponent } from './packets/edit-packet/edit-packet.component';
import { ListContractorComponent } from './contractor/list-contractor/list-contractor.component';
import { AddContractorComponent } from './contractor/add-contractor/add-contractor.component';
import { EditContractorComponent } from './contractor/edit-contractor/edit-contractor.component';
import { ListSalesmanComponent } from './salesman/list-salesman/list-salesman.component';
import { AddSalesmanComponent } from './salesman/add-salesman/add-salesman.component';
import { EditSalesmanComponent } from './salesman/edit-salesman/edit-salesman.component';
import { EditBankComponent } from './bank/edit-bank/edit-bank.component';
import { AddBankComponent } from './bank/add-bank/add-bank.component';
import { ListBankComponent } from './bank/list-bank/list-bank.component';
import { ListOfficerComponent } from './officers/list-officer/list-officer.component';
import { AddOfficerComponent } from './officers/add-officer/add-officer.component';
import { EditOfficerComponent } from './officers/edit-officer/edit-officer.component';
import { ListTcdComponent } from './tcd-range/list-tcd/list-tcd.component';
import { AddTcdComponent } from './tcd-range/add-tcd/add-tcd.component';
import { EditTcdComponent } from './tcd-range/edit-tcd/edit-tcd.component';
import { ListAcdComponent } from './acd-avg/list-acd/list-acd.component';
import { AddAcdComponent } from './acd-avg/add-acd/add-acd.component';
import { EditAcdComponent } from './acd-avg/edit-acd/edit-acd.component';
import { ListProductTaxesComponent } from './product-taxes/list-product-taxes/list-product-taxes.component';
import { AddProductTaxesComponent } from './product-taxes/add-product-taxes/add-product-taxes.component';
import { EditProductTaxesComponent } from './product-taxes/edit-product-taxes/edit-product-taxes.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MasterRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [
    AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    AddPacketComponent,
    ListPacketComponent,
    EditPacketComponent,
    ListContractorComponent,
    AddContractorComponent,
    EditContractorComponent,
    ListSalesmanComponent,
    AddSalesmanComponent,
    EditSalesmanComponent,
    EditBankComponent,
    AddBankComponent,
    ListBankComponent,
    ListOfficerComponent,
    AddOfficerComponent,
    EditOfficerComponent,
    ListTcdComponent,
    AddTcdComponent,
    EditTcdComponent,
    ListAcdComponent,
    AddAcdComponent,
    EditAcdComponent,
    ListProductTaxesComponent,
    AddProductTaxesComponent,
    EditProductTaxesComponent
  ]
})
export class MasterModule { }
