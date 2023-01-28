import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomePage } from './pages/home/home.page';
import { LayoutAdminPage } from './pages/layout-admin/layout-admin.page';
import { SharedModule } from '../../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [HomePage, LayoutAdminPage],
    imports: [CommonModule, AdminRoutingModule, SharedModule, FlexLayoutModule]
})
export class AdminModule {}
