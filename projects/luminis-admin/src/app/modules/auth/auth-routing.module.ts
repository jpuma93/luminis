import { LayoutAuthPage } from './pages/layout-auth/layout-auth.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RecoveryPage } from './pages/recovery/recovery.page';

const routes: Routes = [
    {
        path: '',
        component: LayoutAuthPage,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginPage },
            { path: 'recovery', component: RecoveryPage }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
