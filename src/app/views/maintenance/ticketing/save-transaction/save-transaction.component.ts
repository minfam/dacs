import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
    standalone: true,
    selector: 'maintenance-save-transaction',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule, MatProgressBarModule],
    templateUrl: './save-transaction.component.html',
    styleUrls: ['./save-transaction.component.scss'],
})
export class SaveTransactionComponent implements OnInit {
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
