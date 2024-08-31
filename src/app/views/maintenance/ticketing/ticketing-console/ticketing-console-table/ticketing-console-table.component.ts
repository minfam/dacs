import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-ticketing-console-table',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './ticketing-console-table.component.html',
    styleUrls: ['./ticketing-console-table.component.scss'],
})
export class TicketingConsoleTableComponent implements OnInit {
    urlPrefix: string = '/maintenance/ticketing/ticketing-console';
    constructor(private router: Router) {}

    ngOnInit() {}

    handleNavigate(url: string): void {
        this.router.navigate([this.urlPrefix + url]);
    }
}
