import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductPage } from './pages/list-product/list-product.page';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
    declarations: [ListProductPage],
    imports: [CommonModule, ProductRoutingModule, SharedModule]
})
export class ProductModule {}
