import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';

@Component({
    standalone: true,
    selector: 'breakdown',
    imports: [CommonModule, MatIconModule, RouterModule, ReactiveFormsModule, ConfirmDialogComponent],
    templateUrl: './breakdown.component.html',
    styleUrls: ['./breakdown.component.scss'],
})
export class BreakdownComponent implements OnInit {
    step: number;
    dialogTitle: string = '';
    selected: string = '';

    constructor(private router: Router) {
        this.step = 1;
    }

    ngOnInit() {}

    backToMain() {
        this.router.navigate(['/main']);
    }

    goBack(step: number) {
        this.step = step;
    }

    handleConfirm(isConfirm: boolean) {
        if (isConfirm) {
            this.step = 2;
        } else {
            this.backToMain();
        }
    }

    handleSelectEndTripType(endTripType: string) {
        this.step = 3;
    }

    handleChange(type: string) {
        this.step = 4;

        if (type === 'service') {
            this.dialogTitle = 'Select Service';
        } else if (type === 'direction') {
            this.dialogTitle = 'Select Direction';
        } else if (type === 'first_bus_stop') {
            this.dialogTitle = 'Select First Bus Stop';
        } else {
            this.dialogTitle = 'Select Last Bus Stop';
        }
    }

    handleCloseDeckType() {
        this.step = 1;
        this.selected = '';
    }

    handleToggleValue(selected: string) {
        this.selected = selected;
    }

    handleConfirmValue() {
        this.step = 5;
    }

    handleFinish() {
        this.backToMain();
    }
}
