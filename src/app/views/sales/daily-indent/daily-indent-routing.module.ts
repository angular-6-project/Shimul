import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordIndentComponent } from './record-indent/record-indent.component';

const routes: Routes = [
  {
    path: 'recordIndent',
    component: RecordIndentComponent,
    data: {
      title: 'Record Indent'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyIndentRoutingModule {}
