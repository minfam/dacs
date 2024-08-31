import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-gyro-switch',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './gyro-switch.component.html',
    styleUrls: ['./gyro-switch.component.scss'],
})
export class GyroSwitchComponent implements OnInit {
    step: number;

    constructor() {
        this.step = 1;
    }

    ngOnInit() {}

    handleSelect() {
        this.step = 2;
    }

    handleFinish() {
        this.step = 1;
    }
}
