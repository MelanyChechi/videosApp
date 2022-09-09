import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ABelaEAFeraPage } from './a-bela-e-a-fera.page';

const routes: Routes = [
  {
    path: '',
    component: ABelaEAFeraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ABelaEAFeraPageRoutingModule {}
