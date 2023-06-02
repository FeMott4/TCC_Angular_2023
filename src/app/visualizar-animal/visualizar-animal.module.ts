import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarAnimalPageRoutingModule } from './visualizar-animal-routing.module';

import { VisualizarAnimalPage } from './visualizar-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarAnimalPageRoutingModule
  ],
  declarations: [VisualizarAnimalPage]
})
export class VisualizarAnimalPageModule {}
