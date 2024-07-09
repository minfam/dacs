import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        console.log('This Works!');
    }

    navigate(route: string): void {
        this.router.navigate([route]);
    }

    isRouteActive(route: string): boolean {
        return this.router.url === route;
    }
}
