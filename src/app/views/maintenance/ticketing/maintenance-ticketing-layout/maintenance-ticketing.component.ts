import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, RouterOutlet, ActivatedRoute } from '@angular/router';
import { NgScrollbarModule, NgScrollbar } from 'ngx-scrollbar';

import { SideNavMenu, maintenanceTicketingMenu } from '@data/side-nav';

@Component({
    standalone: true,
    selector: 'maintenance-ticketing-layout',
    imports: [CommonModule, MatIconModule, NgScrollbarModule, RouterModule, RouterOutlet, ReactiveFormsModule],
    templateUrl: './maintenance-ticketing.component.html',
    styleUrls: ['./maintenance-ticketing.component.scss'],
})
export class MaintenanceTicketingComponent implements OnInit {
    menus: SideNavMenu[] = maintenanceTicketingMenu;
    activeMenu: SideNavMenu | null = null;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.checkActiveMenu();
    }

    handleActiveMenu(menu: SideNavMenu): void {
        this.activeMenu = menu;
    }

    checkActiveMenu(): void {
        this.menus.forEach((m: SideNavMenu) => {
            const currentUrl = window.location.pathname;

            if (currentUrl === '/maintenance/ticketing') {
                this.activeMenu = this.menus[4];
            }

            if (`/maintenance/ticketing${m.route}` === currentUrl) {
                this.activeMenu = m;
            }
        });
    }
}
