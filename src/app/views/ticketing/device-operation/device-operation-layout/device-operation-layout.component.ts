import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NgScrollbarModule, NgScrollbar } from 'ngx-scrollbar';

import { SideNavMenu, deviceOperationMenu } from '@data/side-nav';

@Component({
    standalone: true,
    selector: 'device-operation-layout',
    imports: [CommonModule, ReactiveFormsModule, MatIconModule, NgScrollbarModule, RouterModule, RouterOutlet],
    templateUrl: './device-operation-layout.component.html',
    styleUrls: ['./device-operation-layout.component.scss'],
})
export class DeviceOperationLayoutComponent implements OnInit {
    urlPrefix = '/ticketing/device-operation';
    menus: SideNavMenu[] = deviceOperationMenu;
    activeMenu: SideNavMenu | null = null;

    constructor(private router: Router) {}

    ngOnInit() {
        this.checkActiveMenu();
    }

    handleActiveMenu(menu: SideNavMenu): void {
        this.activeMenu = menu;
    }

    checkActiveMenu(): void {
        const url = this.router.url;
        const replaceUrl = url.replace(this.urlPrefix, '');
        if (!replaceUrl) {
            this.activeMenu = this.menus[0];
        } else {
            const [, page] = replaceUrl.split('/');
            const urlId = this.urlPrefix + '/' + page;
            const _activeMenu = this.menus.find((menu) => urlId.indexOf(menu.id) > -1);
            if (_activeMenu) {
                this.activeMenu = _activeMenu;
            }
        }
    }
}
