import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'bls-operation-menu',
    imports: [CommonModule, ReactiveFormsModule, MatIconModule, RouterModule, RouterOutlet],
    templateUrl: './bls-operation-menu.component.html',
    styleUrls: ['./bls-operation-menu.component.scss'],
})
export class BLSOperationMenuComponent implements OnInit {
    urlPrefix = '/ticketing/device-operation/bls';
    constructor(private router: Router) {}

    ngOnInit() {}

    goBack() {
        this.router.navigate(['/ticketing']);
    }

    handleNavigate(url: string) {
        this.router.navigate([this.urlPrefix + url]);
    }
}
