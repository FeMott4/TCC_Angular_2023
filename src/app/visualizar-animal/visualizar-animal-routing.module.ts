import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarAnimalPage } from './visualizar-animal.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarAnimalPageRoutingModule {}
