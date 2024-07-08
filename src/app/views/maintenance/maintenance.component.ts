import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    standalone: true,
    selector: 'app-maintenance',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './maintenance.component.html',
    styleUrls: ['./maintenance.component.scss'],
})
export class MaintenanceComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('This Works!');
    }
}
