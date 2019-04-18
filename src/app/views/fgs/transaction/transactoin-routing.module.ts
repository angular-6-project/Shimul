import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptsComponent } from './receipts/receipts.component';

const routes: Routes = [
  {
    path: 'receipts',
    component: ReceiptsComponent,
    data: {
      title: 'receipts'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule {}
