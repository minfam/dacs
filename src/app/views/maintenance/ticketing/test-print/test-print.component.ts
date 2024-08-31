import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-test-print',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './test-print.component.html',
    styleUrls: ['./test-print.component.scss'],
})
export class TestPrintComponent implements OnInit {
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
