import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {
    menuOptions = [
        { path: ['/admin', 'membership'], name: 'Membresias', icon: 'ic-memberships' },
        { path: ['/admin', 'product'], name: 'Productos', icon: 'ic-products' },
        { path: '', name: 'Reportes', icon: 'ic-reports' },
        { path: '', name: 'Herramientas', icon: 'ic-settings' }
    ];
    constructor() {}

    ngOnInit(): void {}
}
