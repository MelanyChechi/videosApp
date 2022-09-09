import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ABelaEAFeraPageRoutingModule } from './a-bela-e-a-fera-routing.module';

import { ABelaEAFeraPage } from './a-bela-e-a-fera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ABelaEAFeraPageRoutingModule
  ],
  declarations: [ABelaEAFeraPage]
})
export class ABelaEAFeraPageModule {}
