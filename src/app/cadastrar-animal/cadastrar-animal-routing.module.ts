import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarAnimalPage } from './cadastrar-animal.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarAnimalPageRoutingModule {}
