import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerUrls } from '@app/app.routes';

@Component({
    standalone: true,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    activeTab: string = 'main';
    urls: any = routerUrls;
    constructor(private router: Router) {}

    ngOnInit() {
        this.checkActiveTab();
    }

    navigate(route: string): void {
        this.router.navigate([route]);
    }

    onChangeTab(tab: string) {
        this.activeTab = tab;
        this.router.navigate([`/${tab}`]);
    }

    isRouteActive(tab: string): boolean {
        return this.activeTab === tab;
    }

    checkActiveTab(): void {
        const currentRoute = this.router.url;
        if (currentRoute.includes('maintenance')) {
            this.activeTab = 'maintenance';
        } else if (currentRoute.includes('fms')) {
            this.activeTab = 'fms';
        } else if (currentRoute.includes('main')) {
            this.activeTab = 'main';
        } else if (currentRoute.includes('ticketing')) {
            this.activeTab = 'ticketing';
        } else {
            this.activeTab = '';
        }
    }
}
