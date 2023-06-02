import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarAnimalPageRoutingModule } from './consultar-animal-routing.module';

import { ConsultarAnimalPage } from './consultar-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarAnimalPageRoutingModule
  ],
  declarations: [ConsultarAnimalPage]
})
export class ConsultarAnimalPageModule {}
