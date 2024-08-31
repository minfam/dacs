import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';

@Component({
    standalone: true,
    selector: 'concession-cv1',
    imports: [CommonModule, ReactiveFormsModule, MatIconModule, RouterModule, ConfirmDialogComponent],
    templateUrl: './concession-cv1.component.html',
    styleUrls: ['./concession-cv1.component.scss'],
})
export class ConcessionCV1Component implements OnInit {
    step: number;
    success: boolean = true;
    progress: number;
    intervalId;

    constructor(private router: Router) {
        this.step = 1;
        this.progress = 0;
    }

    ngOnInit() {}

    handleConfirmConcession(isConfirm: boolean) {
        if (isConfirm) {
            this.step = 2;
            this.intervalId = setInterval(() => {
                this.progress += 20;
                if (this.progress >= 100) {
                    clearInterval(this.intervalId);
                    this.step = 3;
                }
            }, 500);
        } else {
            this.router.navigate(['/ticketing']);
        }
    }

    handleConcession() {
        this.step = 1;
        clearInterval(this.intervalId);
    }

    handleFinish() {
        this.router.navigate(['/ticketing']);
    }
}
