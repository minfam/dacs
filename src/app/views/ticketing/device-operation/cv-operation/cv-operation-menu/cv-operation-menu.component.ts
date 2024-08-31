import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'cv-operation-menu',
    imports: [CommonModule, ReactiveFormsModule, MatIconModule, RouterModule, RouterOutlet],
    templateUrl: './cv-operation-menu.component.html',
    styleUrls: ['./cv-operation-menu.component.scss'],
})
export class CVOperationMenuComponent implements OnInit {
    urlPrefix = '/ticketing/device-operation/cv';
    constructor(private router: Router) {}

    ngOnInit() {}

    goBack() {
        this.router.navigate(['/ticketing']);
    }

    handleNavigate(url: string) {
        this.router.navigate([this.urlPrefix + url]);
    }
}
