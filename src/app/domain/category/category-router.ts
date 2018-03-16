import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {CategoryFormComponent} from './category-form/category-form.component';
import {CategoryListComponent} from './category-list/category-list.component';

const CategoryRoutes : Routes = [
    { path: 'list',component: CategoryListComponent},
    { path: 'form', component: CategoryFormComponent}
];
@NgModule({
    imports:[
        RouterModule.forChild(CategoryRoutes)
    ],
    exports: [ RouterModule]
})
export class CategoryRoutingModule{}