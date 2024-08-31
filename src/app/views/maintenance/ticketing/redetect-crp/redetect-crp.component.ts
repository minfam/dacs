import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'maintenance-redetect-crp',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule],
    templateUrl: './redetect-crp.component.html',
    styleUrls: ['./redetect-crp.component.scss'],
})
export class RedetectCRPComponent implements OnInit {
    progress: number;
    step: number;

    constructor() {
        this.progress = 0;
        this.step = 1;
    }

    ngOnInit() {}

    handleSaveTransaction() {
        this.step = 2;
        const interval = setInterval(() => {
            this.progress += 5;
            if (this.progress >= 100) {
                clearInterval(interval);
                this.step = 3;
            }
        }, 500);
    }

    handleFinishTransaction() {
        this.step = 1;
    }
}
