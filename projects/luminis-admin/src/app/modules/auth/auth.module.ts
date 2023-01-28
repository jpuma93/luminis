import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';
import { RecoveryPage } from './pages/recovery/recovery.page';
import { LayoutAuthPage } from './pages/layout-auth/layout-auth.page';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [LoginPage, RecoveryPage, LayoutAuthPage],
    imports: [
        CommonModule,
        AuthRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class AuthModule {}
