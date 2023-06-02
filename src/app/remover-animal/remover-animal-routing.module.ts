import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemoverAnimalPage } from './remover-animal.page';

const routes: Routes = [
  {
    path: '',
    component: RemoverAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RemoverAnimalPageRoutingModule {}
