import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'printer-status',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './printer-status.component.html',
    styleUrls: ['./printer-status.component.scss'],
})
export class PrinterStatusComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit() {}

    goBack() {
        this.router.navigate(['/ticketing/device-operation/printer']);
    }
}
