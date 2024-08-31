import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-display-audit',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './display-audit.component.html',
    styleUrls: ['./display-audit.component.scss'],
})
export class DisplayAuditComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
