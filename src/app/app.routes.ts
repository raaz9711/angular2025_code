import { Routes } from '@angular/router';
import { ContactComponent } from './router/contact.component';
import { AboutComponent } from './router/about.component';
import { HomeComponent } from './router/home.component';
import { ParentComponent } from './router/parent.component';
import { ProductListComponent } from './router-param/product-list.component';
import { ProductDetailsComponent } from './router-param/product-details.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/parent',
        pathMatch: 'full'
    },
    {
        path: 'parent',
        component: ParentComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
    {
        path:'about',
        component: AboutComponent
    },
    {
        path: 'products',
        component: ProductListComponent,
        
    },
    { path: 'product/:id', 
        component: ProductDetailsComponent }


    
    
];
