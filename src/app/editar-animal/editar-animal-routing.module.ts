import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAnimalPage } from './editar-animal.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAnimalPageRoutingModule {}
