import { Routes } from '@angular/router';
import { HomeComponent } from './../modules/home/home.component';
import { CategoryComponent } from './../modules/category/category.component';
import { ProductComponent } from './../components/product/product.component';

export const routesLayout: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'product',
        component: ProductComponent
    }
];