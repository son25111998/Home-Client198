import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routesLayout } from './layout.routing';
import { HomeComponent } from './../modules/home/home.component';
import { CategoryComponent } from './../modules/category/category.component';
import { ProductComponent } from './../components/product/product.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routesLayout)
  ]
})
export class LayoutModule { }
