import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-change-wlan-key',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './change-wlan-key.component.html',
    styleUrls: ['./change-wlan-key.component.scss'],
})
export class ChangeWlanKeyComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log('Maintenance ticketing Works!');
    }
}
