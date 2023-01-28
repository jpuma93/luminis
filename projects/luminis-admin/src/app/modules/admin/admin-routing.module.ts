import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { LayoutAdminPage } from './pages/layout-admin/layout-admin.page';

const routes: Routes = [
    {
        path: '',
        component: LayoutAdminPage,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', component: HomePage },
            {
                path: 'membership',
                loadChildren: () => import('./modules/membership/membership.module').then((m) => m.MembershipModule)
            },
            {
                path: 'product',
                loadChildren: () => import('./modules/product/product.module').then((m) => m.ProductModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
