import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProductComponent } from './products/add-product/add-product.component';
import { AddPacketComponent } from './packets/add-packet/add-packet.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ListPacketComponent } from './packets/list-packet/list-packet.component';
import { EditPacketComponent } from './packets/edit-packet/edit-packet.component';
import { ListContractorComponent } from './contractor/list-contractor/list-contractor.component';
import { AddContractorComponent } from './contractor/add-contractor/add-contractor.component';
import { EditContractorComponent } from './contractor/edit-contractor/edit-contractor.component';
import { ListSalesmanComponent } from './salesman/list-salesman/list-salesman.component';
import { AddSalesmanComponent } from './salesman/add-salesman/add-salesman.component';
import { EditSalesmanComponent } from './salesman/edit-salesman/edit-salesman.component';
import { ListBankComponent } from './bank/list-bank/list-bank.component';
import { AddBankComponent } from './bank/add-bank/add-bank.component';
import { EditBankComponent } from './bank/edit-bank/edit-bank.component';
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

const routes: Routes = [
  {
    path: 'listProduct',
    component: ListProductComponent,
    data: {
      title: 'listProduct'
    }
  },
  {
    path: 'addProduct',
    component: AddProductComponent,
    data: {
      title: 'product'
    }
  },
  {
    path: 'editProduct',
    component: EditProductComponent,
    data: {
      title: 'product'
    }
  },
  {
    path: 'listPacket',
    component: ListPacketComponent,
    data: {
      title: 'packet'
    }
  },
  {
    path: 'addPacket',
    component: AddPacketComponent,
    data: {
      title: 'packet'
    }
  },
  {
    path: 'editPacket',
    component: EditPacketComponent,
    data: {
      title: 'packet'
    }
  },
  {
    path: 'listContractor',
    component: ListContractorComponent,
    data: {
      title: 'Contractor'
    }
  },
  {
    path: 'addContractor',
    component: AddContractorComponent,
    data: {
      title: 'Contractor'
    }
  },
  {
    path: 'editContractor',
    component: EditContractorComponent,
    data: {
      title: 'Contractor'
    }
  },
  // Salesman
  {
    path: 'listSalesman',
    component: ListSalesmanComponent,
    data: {
      title: 'Salesman'
    }
  },
  {
    path: 'addSalesman',
    component: AddSalesmanComponent,
    data: {
      title: 'Salesman'
    }
  },
  {
    path: 'editSalesman',
    component: EditSalesmanComponent,
    data: {
      title: 'Salesman'
    }
  },
    // bank
    {
      path: 'listBank',
      component: ListBankComponent,
      data: {
        title: 'Bank'
      }
    },
    {
      path: 'addBank',
      component: AddBankComponent,
      data: {
        title: 'Bank'
      }
    },
    {
      path: 'editBank',
      component: EditBankComponent,
      data: {
        title: 'Bank'
      }
    },
        // officers
        {
          path: 'listOfficer',
          component: ListOfficerComponent,
          data: {
            title: 'Officer'
          }
        },
        {
          path: 'addOfficer',
          component: AddOfficerComponent,
          data: {
            title: 'Officer'
          }
        },
        {
          path: 'editOfficer',
          component: EditOfficerComponent,
          data: {
            title: 'Officer'
          }
        },
        // TCD
        {
          path: 'listTcd',
          component: ListTcdComponent,
          data: {
            title: 'Tcd'
          }
        },
        {
          path: 'addTcd',
          component: AddTcdComponent,
          data: {
            title: 'Tcd'
          }
        },
        {
          path: 'editTcd',
          component: EditTcdComponent,
          data: {
            title: 'Tcd'
          }
        },
          // ACD
          {
            path: 'listAcd',
            component: ListAcdComponent,
            data: {
              title: 'Acd'
            }
          },
          {
            path: 'addAcd',
            component: AddAcdComponent,
            data: {
              title: 'Acd'
            }
          },
          {
            path: 'editAcd',
            component: EditAcdComponent,
            data: {
              title: 'Acd'
            }
          },
            // ACD
            {
              path: 'listProductTaxes',
              component: ListProductTaxesComponent,
              data: {
                title: 'ProductTaxes'
              }
            },
            {
              path: 'addProductTaxes',
              component: AddProductTaxesComponent,
              data: {
                title: 'ProductTaxes'
              }
            },
            {
              path: 'editProductTaxes',
              component: EditProductTaxesComponent,
              data: {
                title: 'ProductTaxes'
              }
            }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
