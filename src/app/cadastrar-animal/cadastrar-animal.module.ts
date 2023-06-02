import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarAnimalPageRoutingModule } from './cadastrar-animal-routing.module';

import { CadastrarAnimalPage } from './cadastrar-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarAnimalPageRoutingModule
  ],
  declarations: [CadastrarAnimalPage]
})
export class CadastrarAnimalPageModule {}
