import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'printer-operation-menu',
    imports: [CommonModule, ReactiveFormsModule, MatIconModule, RouterModule, RouterOutlet],
    templateUrl: './printer-operation-menu.component.html',
    styleUrls: ['./printer-operation-menu.component.scss'],
})
export class PrinterOperationMenuComponent implements OnInit {
    urlPrefix = '/ticketing/device-operation/printer';
    constructor(private router: Router) {}

    ngOnInit() {}

    goBack() {
        this.router.navigate(['/ticketing']);
    }

    handleNavigate(url: string) {
        this.router.navigate([this.urlPrefix + url]);
    }
}
