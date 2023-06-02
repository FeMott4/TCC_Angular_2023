import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarAnimalPage } from './consultar-animal.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarAnimalPageRoutingModule {}
