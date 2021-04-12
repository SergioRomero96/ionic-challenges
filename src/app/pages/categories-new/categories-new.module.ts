import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriesNewPageRoutingModule } from './categories-new-routing.module';

import { CategoriesNewPage } from './categories-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriesNewPageRoutingModule
  ],
  declarations: [CategoriesNewPage]
})
export class CategoriesNewPageModule {}
