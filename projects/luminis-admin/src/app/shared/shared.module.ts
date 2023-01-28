import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgBrokenDirective } from './directives/img-broken.directive';
import { ContainerComponent } from './components/container/container.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [HeaderComponent, ImgBrokenDirective, ContainerComponent, PaginatorComponent, TableComponent],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        FlexLayoutModule,
        MatCardModule,
        MatTableModule
    ],
    exports: [
        ImgBrokenDirective,
        ContainerComponent,
        PaginatorComponent,
        TableComponent,
        HeaderComponent,
        MatCardModule
    ]
})
export class SharedModule {}
