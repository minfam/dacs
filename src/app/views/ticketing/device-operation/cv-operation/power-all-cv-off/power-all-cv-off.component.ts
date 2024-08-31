import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { CustomKeyboardComponent } from '@components/custom-keyboard/custom-keyboard.component';

@Component({
    standalone: true,
    selector: 'power-all-cv-off',
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        ReactiveFormsModule,
        ConfirmDialogComponent,
        CustomKeyboardComponent,
    ],
    templateUrl: './power-all-cv-off.component.html',
    styleUrls: ['./power-all-cv-off.component.scss'],
})
export class PowerAllCVOffComponent implements OnInit {
    step: number;
    currentTime: string;
    inputValue: string;
    success: boolean = true;

    constructor(private router: Router) {
        this.currentTime = '09:54:16';
        this.inputValue = '';
        this.step = 1;
    }

    ngOnInit() {}

    goBack() {
        this.router.navigate(['/ticketing/device-operation/cv']);
    }

    handleSelect() {
        this.step = 2;
    }

    handlePowerAllCVOff(isConfirm: boolean) {
        if (isConfirm) {
            this.step = 3;
        } else {
            this.step = 1;
        }
    }

    handleFinish() {
        this.step = 1;
    }
}
