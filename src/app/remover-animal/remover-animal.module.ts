import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoverAnimalPageRoutingModule } from './remover-animal-routing.module';

import { RemoverAnimalPage } from './remover-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoverAnimalPageRoutingModule
  ],
  declarations: [RemoverAnimalPage]
})
export class RemoverAnimalPageModule {}
