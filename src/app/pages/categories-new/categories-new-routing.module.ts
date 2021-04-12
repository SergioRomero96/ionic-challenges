import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesNewPage } from './categories-new.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriesNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesNewPageRoutingModule {}
