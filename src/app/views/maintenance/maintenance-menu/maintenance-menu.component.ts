import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-maintenance',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './maintenance-menu.component.html',
    styleUrls: ['./maintenance-menu.component.scss'],
})
export class MaintenanceMenuComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {
        console.log('Maintenance!');
    }

    buttons = [
        {
            title: 'Ticketing',
            icon: '/assets/images/icons/maintenance/ticketing.svg',
            link: '/maintenance/ticketing',
        },
        {
            title: 'FMS',
            icon: '/assets/images/icons/maintenance/envelopesettings.svg',
            link: '/maintenance/fms',
        },
    ];

    navigate(link: string) {
        this.router.navigate([link]);
    }
}
