import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { PageAComponent } from './page-a/page-a.component';
import { PageBComponent } from './page-b/page-b.component';
import { ErrorComponent } from './error/error.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const routes: Routes = [
    //{ path: '', redirectTo: 'page-a', pathMatch: 'full' },
    { path: 'page-a', component: PageAComponent },
    { path: 'page-b', component: PageBComponent },
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: '**', component: ErrorComponent }, // It's possible to declare a route that would match anything that hasn't matched any other routes.
];

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], //fonction permet de définir la path au tout début
    exports: [RouterModule], 
})

export class AppRoutingModule {}