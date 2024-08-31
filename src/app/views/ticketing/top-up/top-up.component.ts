import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';

@Component({
    standalone: true,
    selector: 'top-up',
    imports: [CommonModule, ReactiveFormsModule, MatIconModule, RouterModule, RouterOutlet, ConfirmDialogComponent],
    templateUrl: './top-up.component.html',
    styleUrls: ['./top-up.component.scss'],
})
export class TopUpComponent implements OnInit {
    topUpAmounts: number[] = [10, 20, 30, 40, 70];
    selectedAmt: number = 0;
    step: number;

    constructor(private router: Router) {
        this.step = 1;
    }
    ngOnInit() {}

    goBack() {
        this.router.navigate(['/ticketing']);
    }

    handleSelectAmt(amt: number) {
        this.selectedAmt = amt;
        this.step = 2;
    }

    handleConfirmTopUpAmt(isConfirm: boolean) {
        if (isConfirm) {
            this.step = 3;
        } else {
            this.selectedAmt = 0;
            this.step = 1;
        }
    }

    handleFinish() {
        this.step = 1;
    }
}
